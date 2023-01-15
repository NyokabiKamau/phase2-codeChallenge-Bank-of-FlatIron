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
* click on this link ()

# Author
This project was contributed to by: 
* [Nyokabi Kamau](https://github.com/NyokabiKamau/)

# License
* This project is licensed under GNU General Public License v3
