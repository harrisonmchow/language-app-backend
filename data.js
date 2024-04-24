const words = [
    'Congratulations', 'Life', 'Number', 'Basic', 'Love', 'People',
    'Common', 'Part', 'Woman', 'Moderate', 'Routine',
    'Time', 'Year', 'Thing', 'Familiar', 'Day',
    'Work', 'Good', 'Traditional', 'Need', 'Ordinary',
    'Friend', 'Straightforward', 'Simple', 'Child', 'Basic',
    'Man', 'World', 'Commonplace', 'Place', 'Elementary',
    'Way', 'Conventional', 'Standard', 'Typical', 'Usual',
    'Routine', 'Average', 'Plain', 'Routine', 'Basic'
];

const supportedLanguages = [
    {
        "language": "af",
        "name": "Afrikaans"
    },
    {
        "language": "sq",
        "name": "Albanian"
    },
    {
        "language": "am",
        "name": "Amharic"
    },
    {
        "language": "ar",
        "name": "Arabic"
    },
    {
        "language": "hy",
        "name": "Armenian"
    },
    {
        "language": "as",
        "name": "Assamese"
    },
    {
        "language": "ay",
        "name": "Aymara"
    },
    {
        "language": "az",
        "name": "Azerbaijani"
    },
    {
        "language": "bm",
        "name": "Bambara"
    },
    {
        "language": "eu",
        "name": "Basque"
    },
    {
        "language": "be",
        "name": "Belarusian"
    },
    {
        "language": "bn",
        "name": "Bengali"
    },
    {
        "language": "bho",
        "name": "Bhojpuri"
    },
    {
        "language": "bs",
        "name": "Bosnian"
    },
    {
        "language": "bg",
        "name": "Bulgarian"
    },
    {
        "language": "ca",
        "name": "Catalan"
    },
    {
        "language": "ceb",
        "name": "Cebuano"
    },
    {
        "language": "ny",
        "name": "Chichewa"
    },
    {
        "language": "zh",
        "name": "Chinese (Simplified)"
    },
    {
        "language": "zh-TW",
        "name": "Chinese (Traditional)"
    },
    {
        "language": "co",
        "name": "Corsican"
    },
    {
        "language": "hr",
        "name": "Croatian"
    },
    {
        "language": "cs",
        "name": "Czech"
    },
    {
        "language": "da",
        "name": "Danish"
    },
    {
        "language": "dv",
        "name": "Divehi"
    },
    {
        "language": "doi",
        "name": "Dogri"
    },
    {
        "language": "nl",
        "name": "Dutch"
    },
    // {
    //     "language": "en",
    //     "name": "English"
    // },
    {
        "language": "eo",
        "name": "Esperanto"
    },
    {
        "language": "et",
        "name": "Estonian"
    },
    {
        "language": "ee",
        "name": "Ewe"
    },
    {
        "language": "tl",
        "name": "Filipino"
    },
    {
        "language": "fi",
        "name": "Finnish"
    },
    {
        "language": "fr",
        "name": "French"
    },
    {
        "language": "fy",
        "name": "Frisian"
    },
    {
        "language": "gl",
        "name": "Galician"
    },
    {
        "language": "lg",
        "name": "Ganda"
    },
    {
        "language": "ka",
        "name": "Georgian"
    },
    {
        "language": "de",
        "name": "German"
    },
    {
        "language": "el",
        "name": "Greek"
    },
    {
        "language": "gn",
        "name": "Guarani"
    },
    {
        "language": "gu",
        "name": "Gujarati"
    },
    {
        "language": "ht",
        "name": "Haitian Creole"
    },
    {
        "language": "ha",
        "name": "Hausa"
    },
    {
        "language": "haw",
        "name": "Hawaiian"
    },
    {
        "language": "iw",
        "name": "Hebrew"
    },
    {
        "language": "hi",
        "name": "Hindi"
    },
    {
        "language": "hmn",
        "name": "Hmong"
    },
    {
        "language": "hu",
        "name": "Hungarian"
    },
    {
        "language": "is",
        "name": "Icelandic"
    },
    {
        "language": "ig",
        "name": "Igbo"
    },
    {
        "language": "ilo",
        "name": "Iloko"
    },
    {
        "language": "id",
        "name": "Indonesian"
    },
    {
        "language": "ga",
        "name": "Irish Gaelic"
    },
    {
        "language": "it",
        "name": "Italian"
    },
    {
        "language": "ja",
        "name": "Japanese"
    },
    {
        "language": "jw",
        "name": "Javanese"
    },
    {
        "language": "kn",
        "name": "Kannada"
    },
    {
        "language": "kk",
        "name": "Kazakh"
    },
    {
        "language": "km",
        "name": "Khmer"
    },
    {
        "language": "rw",
        "name": "Kinyarwanda"
    },
    {
        "language": "gom",
        "name": "Konkani"
    },
    {
        "language": "ko",
        "name": "Korean"
    },
    {
        "language": "kri",
        "name": "Krio"
    },
    {
        "language": "ku",
        "name": "Kurdish (Kurmanji)"
    },
    {
        "language": "ckb",
        "name": "Kurdish (Sorani)"
    },
    {
        "language": "ky",
        "name": "Kyrgyz"
    },
    {
        "language": "lo",
        "name": "Lao"
    },
    {
        "language": "la",
        "name": "Latin"
    },
    {
        "language": "lv",
        "name": "Latvian"
    },
    {
        "language": "ln",
        "name": "Lingala"
    },
    {
        "language": "lt",
        "name": "Lithuanian"
    },
    {
        "language": "lb",
        "name": "Luxembourgish"
    },
    {
        "language": "mk",
        "name": "Macedonian"
    },
    {
        "language": "mai",
        "name": "Maithili"
    },
    {
        "language": "mg",
        "name": "Malagasy"
    },
    {
        "language": "ms",
        "name": "Malay"
    },
    {
        "language": "ml",
        "name": "Malayalam"
    },
    {
        "language": "mt",
        "name": "Maltese"
    },
    {
        "language": "mi",
        "name": "Maori"
    },
    {
        "language": "mr",
        "name": "Marathi"
    },
    {
        "language": "mni-Mtei",
        "name": "Meiteilon (Manipuri)"
    },
    {
        "language": "lus",
        "name": "Mizo"
    },
    {
        "language": "mn",
        "name": "Mongolian"
    },
    {
        "language": "my",
        "name": "Myanmar (Burmese)"
    },
    {
        "language": "ne",
        "name": "Nepali"
    },
    {
        "language": "nso",
        "name": "Northern Sotho"
    },
    {
        "language": "no",
        "name": "Norwegian"
    },
    {
        "language": "or",
        "name": "Odia (Oriya)"
    },
    {
        "language": "om",
        "name": "Oromo"
    },
    {
        "language": "ps",
        "name": "Pashto"
    },
    {
        "language": "fa",
        "name": "Persian"
    },
    {
        "language": "pl",
        "name": "Polish"
    },
    {
        "language": "pt",
        "name": "Portuguese"
    },
    {
        "language": "pa",
        "name": "Punjabi"
    },
    {
        "language": "qu",
        "name": "Quechua"
    },
    {
        "language": "ro",
        "name": "Romanian"
    },
    {
        "language": "ru",
        "name": "Russian"
    },
    {
        "language": "sm",
        "name": "Samoan"
    },
    {
        "language": "sa",
        "name": "Sanskrit"
    },
    {
        "language": "gd",
        "name": "Scots Gaelic"
    },
    {
        "language": "sr",
        "name": "Serbian"
    },
    {
        "language": "st",
        "name": "Sesotho"
    },
    {
        "language": "sn",
        "name": "Shona"
    },
    {
        "language": "sd",
        "name": "Sindhi"
    },
    {
        "language": "si",
        "name": "Sinhala"
    },
    {
        "language": "sk",
        "name": "Slovak"
    },
    {
        "language": "sl",
        "name": "Slovenian"
    },
    {
        "language": "so",
        "name": "Somali"
    },
    {
        "language": "es",
        "name": "Spanish"
    },
    {
        "language": "su",
        "name": "Sundanese"
    },
    {
        "language": "sw",
        "name": "Swahili"
    },
    {
        "language": "sv",
        "name": "Swedish"
    },
    {
        "language": "tg",
        "name": "Tajik"
    },
    {
        "language": "ta",
        "name": "Tamil"
    },
    {
        "language": "tt",
        "name": "Tatar"
    },
    {
        "language": "te",
        "name": "Telugu"
    },
    {
        "language": "th",
        "name": "Thai"
    },
    {
        "language": "ti",
        "name": "Tigrinya"
    },
    {
        "language": "ts",
        "name": "Tsonga"
    },
    {
        "language": "tr",
        "name": "Turkish"
    },
    {
        "language": "tk",
        "name": "Turkmen"
    },
    {
        "language": "ak",
        "name": "Twi"
    },
    {
        "language": "uk",
        "name": "Ukrainian"
    },
    {
        "language": "ur",
        "name": "Urdu"
    },
    {
        "language": "ug",
        "name": "Uyghur"
    },
    {
        "language": "uz",
        "name": "Uzbek"
    },
    {
        "language": "vi",
        "name": "Vietnamese"
    },
    {
        "language": "cy",
        "name": "Welsh"
    },
    {
        "language": "xh",
        "name": "Xhosa"
    },
    {
        "language": "yi",
        "name": "Yiddish"
    },
    {
        "language": "yo",
        "name": "Yoruba"
    },
    {
        "language": "zu",
        "name": "Zulu"
    },
    {
        "language": "he",
        "name": "Hebrew"
    },
    {
        "language": "jv",
        "name": "Javanese"
    },
    {
        "language": "zh-CN",
        "name": "Chinese (Simplified)"
    }
];

const wordsWithHints = [
    { word: 'Congratulations', hints: ['Often used to express joy or good wishes for someone\'s success.', 'Given to someone who has achieved something remarkable.'] },
    { word: 'Life', hints: ['The existence of an individual human being or animal.', 'The period between birth and death.'] },
    { word: 'Number', hints: ['Commonly associated with mathematics.', 'Used to quantify or count something.'] },
    { word: 'Basic', hints: ['Fundamental or essential.', 'Simple and uncomplicated.'] },
    { word: 'Love', hints: ['An intense feeling of deep affection.', 'Often depicted as a heart symbol.'] },
    { word: 'People', hints: ['Human beings in general or considered collectively.', 'Social creatures that live in communities.'] },
    { word: 'Common', hints: ['Frequently occurring or found.', 'Shared by many or all.'] },
    { word: 'Part', hints: ['A piece or segment of something.', 'Contributes to a whole.'] },
    { word: 'Woman', hints: ['An adult human female.', 'Often depicted with long hair and feminine features.'] },
    { word: 'Moderate', hints: ['Kept within reasonable limits.', 'Not excessive or extreme.'] },
    { word: 'Routine', hints: ['A sequence of actions regularly followed.', 'Daily tasks or activities.'] },
    { word: 'Time', hints: ['The indefinite continued progress of existence.', 'Measured in seconds, minutes, hours, etc.'] },
    { word: 'Year', hints: ['A period of 365 days.', 'Divided into twelve months.'] },
    { word: 'Thing', hints: ['An object, fact, or event.', 'Used to refer to something unspecified or unknown.'] },
    { word: 'Familiar', hints: ['Well-known from long or close association.', 'Seeming well-acquainted.'] },
    { word: 'Day', hints: ['The period of light between sunrise and sunset.', 'Consists of twenty-four hours.'] },
    { word: 'Work', hints: ['Activity involving mental or physical effort.', 'Done to achieve a purpose or result.'] },
    { word: 'Good', hints: ['Morally excellent.', 'Beneficial or advantageous.'] },
    { word: 'Traditional', hints: ['Based on customs or beliefs.', 'Passed down from generation to generation.'] },
    { word: 'Need', hints: ['Require something because it is essential.', 'A lack of something necessary or desirable.'] },
    { word: 'Ordinary', hints: ['With no special or distinctive features.', 'Commonplace or usual.'] },
    { word: 'Friend', hints: ['A person with whom one has a bond of mutual affection.', 'Someone you can rely on and trust.'] },
    { word: 'Straightforward', hints: ['Direct and uncomplicated.', 'Easy to understand or follow.'] },
    { word: 'Simple', hints: ['Easily understood or done.', 'Not elaborate or complicated.'] },
    { word: 'Child', hints: ['A young human being below the age of puberty.', 'Dependent on adults for care and guidance.'] },
    { word: 'Man', hints: ['An adult human male.', 'Often depicted with masculine features.'] },
    { word: 'World', hints: ['The earth, together with all of its countries and peoples.', 'The universe or all that exists.'] },
    { word: 'Commonplace', hints: ['Not unusual or remarkable.', 'Frequently encountered or seen.'] },
    { word: 'Place', hints: ['A particular position or location.', 'A space or area that is occupied.'] },
    { word: 'Elementary', hints: ['Relating to the basic principles or fundamental parts.', 'Simple or straightforward.'] },
    { word: 'Way', hints: ['A method, style, or manner of doing something.', 'A route or direction.'] },
    { word: 'Conventional', hints: ['Based on or in accordance with what is generally done.', 'Following traditional or common practices.'] },
    { word: 'Standard', hints: ['An accepted or approved model.', 'Established as a measure or rule for quality.'] },
    { word: 'Typical', hints: ['Having the distinctive qualities of a particular type of person or thing.', 'Representative of a pattern or standard.'] },
    { word: 'Usual', hints: ['Customary or habitual.', 'As expected or normal.'] },
    { word: 'Routine', hints: ['A sequence of actions regularly followed.', 'Daily tasks or activities.'] },
    { word: 'Average', hints: ['The result obtained by adding several quantities together and then dividing this total by the number of quantities.', 'Not outstanding or exceptional.'] },
    { word: 'Plain', hints: ['Not decorated or elaborate.', 'Simple and unpretentious.'] }
];

module.exports = {
    words,
    supportedLanguages,
    wordsWithHints
};