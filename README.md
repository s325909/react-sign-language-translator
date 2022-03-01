# React - Sign Language Translator App
Lost in Translation - a Single Page Application built using the React framework.
The application has one main feature: to act as a “translator” from regular text to sign language. Furthermore, to translate English words and short sentences to American sign language.

## Table of Contents
- [Detailed Description](#detailed-description)
- [Install](#install)
- [Usage](#usage)
- [Author and Developer](#author-and-developer)

## Detailed Description
The first thing the user sees when opening the application is the **Startup** page where the user where the user can enter their name and sign in.
The username is saved to the Translations API hosted on Heroku. Users that are already signed in will automatically be redirected to the Translation page. This is accomplished and managed by saving the user data to the the browsers’ local session storage. As such, a user may only view and access the main feature of the application, namely the **Translation** page, if they are currently signed into the app. Otherwise the user will be redirect back to the **Startup** page if no active login session exists in the browser storage.

On the **Translation** page, the user types in the input box at the top of the page. The “translate” button to the right of the input box will trigger the translation. The translation text will be stored using the Translations API, while the Sign language characters will appear in the “translated” box for the user to see.

The **Profile** page will display the last 10 translations (text) for the current user. Here the user is presented with a button to clear the translations. This will “delete” the transaltions in your API and no longer display them on the profile page. Lastly, you have a Sign Out button which clears all the storage and return to the start page. 

## Install
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:
```
npm start
```
This will install depencencies from package.json and run the application in the development mode on localhost.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

Sign in with a username on the **Startup** page. This will take you to a new or existing **Profile** page. From here you can navigate to the **Translation** page where you can start translating text to american sign language.

The application is published on **Heroku**.\
Open [https://jc-react-translation-app.herokuapp.com/](https://jc-react-translation-app.herokuapp.com/) to view the application.

## Author and Developer
Jasotharan Cyril



