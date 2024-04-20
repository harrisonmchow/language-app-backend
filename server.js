require('dotenv').config();
const axios = require('axios');
const express = require('express');
const app = express();
const {words, supportedLanguages} = require('./data.js');
const port = process.env.PORT || 3000; // Use the port defined in the environment variable PORT or default to 3000
const intervalMinutes = parseInt(process.env.INTERVAL_MINUTES);
const startingIndex = parseInt(process.env.STARTING_INDEX);
var selectedWord = "";
var translations = {};

/* *** BACKEND FUNCTIONS *** */
async function rotateWords(words, intervalMinutes, startingIndex) {
    /* Initialise starting word */
    let index = startingIndex;
    selectedWord = words[index];
    console.log(selectedWord);
    await translate(selectedWord);

    /* Get the current time */
    const currentTime = new Date();
    /* Calculate the time remaining until the next interval-minute mark */
    const minutesRemaining = intervalMinutes - (currentTime.getMinutes() % intervalMinutes);
    /* Calculate milliseconds until the next interval-minute mark */
    const millisecondsRemaining = (minutesRemaining * 60 * 1000) - (currentTime.getSeconds() * 1000) - currentTime.getMilliseconds();

    /* Start the interval */
    setTimeout(async () => {
        /* Increment index */
        index = (index + 1) % words.length;
        selectedWord = words[index];
        console.log(selectedWord);
        await translate(selectedWord);
        /* Set interval to repeat every {intervalMinutes} minutes */
        setInterval(async () => {
            /* Increment index */
            index = (index + 1) % words.length;
            /* Print the word at the current index */
            selectedWord = words[index];
            await translate(selectedWord);
            console.log(selectedWord);

        }, intervalMinutes * 60 * 1000);
    }, millisecondsRemaining);
};

/* Translate a single word into all supported languages and store in map */
async function translate(word) {
    const newTranslationMap = {};
    const apiKey = process.env.GOOGLE_API_KEY;
    const url = "https://translation.googleapis.com/language/translate/v2";

    /* For testing, test only the first 3 to limit API calls */
    let i = 0;
    for (const language of supportedLanguages) {
        if (i >= 3) break;
        /* Make an API request to translate for each language */
        try {
            const response = await axios.post(
                url,
                {
                    q: word,
                    target: language.language
                },
                {
                    headers: {
                        "x-goog-api-key": apiKey
                    }
                }
            );
            /* Refer to Notion for Google API schema */
            const data = response.data.data.translations[0];
            newTranslationMap[language.name] = data.translatedText;
        } catch (err) {
            console.log(err);
        }
        i++;
    };
    translations = newTranslationMap;
}

/* *** ROUTES *** */
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

/* Return the word */
app.get('/dailyword', (req, res) => {
    res.send({word: selectedWord});
});

/* All translations of daily word */
app.get('/alltranslations', (req, res) => {
    res.send({translations: translations});
});

/* Define a route for handling 404 errors */ 
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

/* Start the server */
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

/* Start the word rotations */
rotateWords(words, intervalMinutes, startingIndex);
