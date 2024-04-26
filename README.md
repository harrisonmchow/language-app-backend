# language-app-backend

## Download Node.js
Follow download instructions: https://nodejs.org/en/download

## How to set up this repo

`git clone <url>`

## Switch to the branch for the current sprint
To create a new branch:
`git checkout -b sprint_<x>`

or 

To switch to an existing branch:
`git checkout sprint_<x>`

## Set up .env file
Create a .env file in the root of this directory. Fill it with the following
```javascript
INTERVAL_MINUTES=1
STARTING_INDEX=0
GOOGLE_API_KEY=
PORT=5555
```
Edit the following variables to change how frequently the word changes, and what word it starts on.
For production, since we want to rotate every 24 hours, let `INTERVAL_MINUTES=1440`
Our api-key for google can be found here: https://console.cloud.google.com/apis/api/translate.googleapis.com/credentials?hl=en&project=resonant-petal-420807

## Set up node modules
Install node modules by running
`npm install`

## Start backend
`npm start`

# Testing the backend
For testing, we do not want to overload the API since we have a quota for Google API calls. Hence, we should only test a small amount of translations when testing, e.g. 3
To do this, uncomment the code in the `translate` function to break after 3 api calls.

## Now you can start sending requests to it via the frontend or Postman.
Check out this page for the available routes: https://www.notion.so/Backend-Routes-dca508dd939a480ca574559cfc62043c?pvs=4

NOTE: Limit the amount of API calls to translate during testing as we have a quota per month (up to 500,000 characters per month for free)
Source: https://cloud.google.com/translate?hl=en#pricing
