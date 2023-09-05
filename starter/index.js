const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

// Internal modules
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [   
// Project name
{
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('You need to enter a title to continue!');
            return false;
        }
    }
},
// Description of project
{
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('You need to provide a project description!');
            return false;
        }
    }
},
// Installation Instructions
{
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('You need to provide installation info to continue!');
            return false;
        }
    }
},
// Usage Information
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this project?',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('You need to provide information on how to use project!');
            return false;
        }
    }
},
// Contribution Guidlines
{
    type: 'input',
    name: 'contribution',
    message: 'How should people contribute to this project?',
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log('You need to provide information on how to contribute to the project!');
            return false;
        }
    }
},
// License Options
{
    type: 'checkbox',
    name: 'licensing',
    message: 'Choose a license for your project',
    choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
    validate: licensingInput => {
        if (licensingInput) {
            return true;
        } else {
            console.log('You must pick a license for the project!');
            return false;
        }
    }
},
// Test Instructions 
{
    type: 'input',
    name: 'testing',
    message: 'How do you test this project? ',
    validate: testingInput => {
        if (testingInput) {
            return true;
        } else {
            console.log('You need to describe how to test this project!');
            return false;
        }
    }
},
// Github Username :
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false;
        }
    }
},
// Email Address :
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address?',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter your email address!');
            return false;
        }
    }
},
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// function call to initialize program
init();
