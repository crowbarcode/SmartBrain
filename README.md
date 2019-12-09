# SmartBrain - FRONTEND
My version of the final project for the [Zero To Mastery](https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/) course

## Description
This project provides an UI for the clarifai api

## Features
* You can temporary register on the website until you restart the server
* You can signin into the website with your created credentials
* Provide the textfeld a link to a picture and it will detect the faces in it.

## Installation

1. clone this repo and also [this](https://github.com/crowbarcode/SmartBrain-API) repo
2. run `yarn` in both of them
3. grab your Clarifai API key [here](https://www.clarifai.com/)
4. create a `secrets.js` file with this inside `export const apiKey = 'YOUR-API-KEY_HERE';` in the `src/` folder in the SmartBrain repository   
5. run `yarn start` in the **SmartBrain-API** repo first and then in the SmartBrain repo.
6. open your browser and visit [http://localhost:3001](http://localhost:3001/)

## ToDo
* adding a database and connect it to the frontend
* deploying on heroku
