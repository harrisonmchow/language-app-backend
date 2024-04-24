# language-app-backend

## How to set up this repo

`git clone <url>`

## Switch to the branch for the current sprint
To create a new branch:
`git checkout -b sprint_<x>`

or 

To switch to an existing branch:
`git checkout sprint_<x>`

## Download Node.js
Follow download instructions: https://nodejs.org/en/download

## Set up .env file
Create a .env file in the root of this directory. Fill it with the following
```javascript
INTERVAL_MINUTES=1
STARTING_INDEX=0
GOOGLE_API_KEY=
PORT=5555
```

Edit the following variables to change how frequently the word changes, and what word it starts on.

## Set up node modules
Install node modules by running
`npm install`

## Start backend
`npm start`

