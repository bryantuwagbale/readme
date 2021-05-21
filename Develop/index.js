// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const fetch = require("node-fetch");

const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
function promtUser() {
    return inquirer.prompt(
         [
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'What is your project about?',
                name: 'desc',
            },
            {
                type: 'input',
                message: 'What license do you need?',
                name: 'license',
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'username',
            },
        ]
        
    
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
