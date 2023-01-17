# Phase2 Code Challenge Week1 
# Bank of Flat Iron

# Table of Content
1. [Requirements](#requirements)
2. [Project Guidelines](#project-guidelines)
    - [Core Deliverables](#core-deliverables)
    - [Bonus Deliverables](#bonus-deliverables)
2. [Project Setup & Pre-requisite Data](#project-setup--pre-requisite-data)
3. [Project Setup](#project-setup)
    - [Installation](#installations)
    - [Access](#access)
4. [Authors](#author)
5. [License](#license)
 

## Requirements
For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.
The instructions below will walk you through the process of ideation and planning your app: deciding on your user interface, planning how the information will be laid out on the page, etc. You should work through all the planning steps before you start doing any coding.

## Project Guidelines
Your project should conform to the following set of guidelines:

### Core Deliverables
As a user, I can:
- See a table of all transactions.
- Fill out and submit the form to add a new transaction. This should add the new transaction to the table *the new transaction does not have to be persisted to the backend*
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

### Bonus Deliverables
As a user, I should be able to:
- Sort transactions alphabetically by category or description.
- Delete a transaction which will remove it from the table

## Project Setup & Pre-requisite Data
In your project directory, create a db.json file and use this data Links to an external site.for your server DB.

* Run this command to get the backend started: <code>json-server --watch db.json</code>
* Test your server by visiting this route in the browser: http://localhost:8001/transactions
 

## Project Setup
Once you have the plan in place for the application you want to build take the following steps:

To access this project on you local computer, follow the steps below
* Open your terminal
* Clone this repository: 
    - Run <code>git clone (git@github.com:NyokabiKamau/phase2-codeChallenge-Bank-of-FlatIron.git)</code>
* Change directory:
    - Run <code>cd code_challenges</code>

### Installations:
* Run <code>npm install</code> on the terminal

* Run <code>npm install -g npm</code> This will make sure you have the newest version of npm. Once this is installed, you should be able to run the npx command.

* Run <code>npm init</code> to add the node modules and json package files

* Run <code>npx json-server --watch db.json</code> on your terminal to start the backend json server
   * (This enables the user to view the list of films and access their content on the browser and buy tickets)

   * or
   
   * <code>npm start</code>

* Open a new terminal and navigate to code_challenges 
* Open Visual Studio Code:
    - Run <code>code .</code>
* Click on the available files to view the codes used

### Access
To access the content on the browser:
* click on this link (phase2-code-challenge-bank-of-flat-iron.vercel.app/)

# Author
This project was contributed to by: 
* [Nyokabi Kamau](https://github.com/NyokabiKamau/)

# License
* This project is licensed under GNU General Public License v3


<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
