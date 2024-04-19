require('dotenv').config();
require('dotenv').config();
const express = require('express');
const app = express();
const words = require('./data.js');
const port = process.env.PORT || 3000; // Use the port defined in the environment variable PORT or default to 3000
const intervalMinutes = parseInt(process.env.INTERVAL_MINUTES);
const startingIndex = parseInt(process.env.STARTING_INDEX);

/* *** BACKEND FUNCTIONS *** */
var selectedWord = "";
function rotateWords(words, intervalMinutes, startingIndex) {
    // Initialise starting word
    let index = startingIndex;
    selectedWord = words[index];
    console.log(words[index]);
    // Get the current time
    const currentTime = new Date();
    // Calculate the time remaining until the next 5-minute mark
    const minutesRemaining = intervalMinutes - (currentTime.getMinutes() % intervalMinutes);
    // Calculate milliseconds until the next 5-minute mark
    const millisecondsRemaining = (minutesRemaining * 60 * 1000) - (currentTime.getSeconds() * 1000) - currentTime.getMilliseconds();

    // Start the interval
    setTimeout(() => {
        // Increment index
        index = (index + 1) % words.length;
        selectedWord = words[index];
        console.log(words[index]);
        // Set interval to repeat every {intervalMinutes} minutes
        setInterval(() => {
            // Increment index
            index = (index + 1) % words.length;
            // Print the word at the current index
            console.log(words[index]);
            selectedWord = words[index];
        }, intervalMinutes * 60 * 1000);
    }, millisecondsRemaining);
};

/* *** ROUTES *** */
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

/* Return the word */
app.get('/dailyword', (req, res) => {
    res.send({word: selectedWord});
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
