const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Title of README?",
        name: "title"
    },
    {
        type: "editor",
        message: "App Description?",
        name: "desc"
    },  
    {
        type: "input", 
        message: "How can a user install this app?", 
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage of this app?",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "License?",
        name: "license",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "MIT License", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "The Unlicense"]
    }, 
    {
        type: "input",
        message: "Contributors to this app?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What is the test file/folder Github link?",
        name: "test"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!");
        }
    })
}

// function to initialize program
function init() {
    let prompt = inquirer.createPromptModule();
    
    prompt(questions).then((response) => {
        writeToFile("README.md", generateMarkdown(response));
    }).catch(error => {
        if (error.isTtyError) {
            console.log("Prompt could not be rendered in the current environment.");
        } else {
            console.log(error);
        }
    })
}

// function call to initialize program
init();

// export init function so it can be used in other applications
module.exports = init;