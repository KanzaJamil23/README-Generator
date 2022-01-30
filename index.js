// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of your project'
    },
    {
        type: 'input',
        name: 'Install',
        message: 'How can you install your project'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How can you use your project'

    }, 
    {
        type: 'input',
        name: 'Test',
        message: 'How can you test it'
    },
    {
        type: 'list',
        name: 'License',
        message: 'Which license is being used'
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'Who are the contributors on the project'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your github'
    }
];    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./PreviewREADME"+fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log ("README Generated Successfully" + fileName);
    })
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("PreviewREADME", generateMarkdown(data));
    })
}

// Function call to initialize app
init();