const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [];

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
    inquirer.prompt([
        {
            type: "input",
            message: "Title of README?",
            name: "title"
        },
        {
            type: "input",
            message: "Description?",
            name: "description"
        },
        {
            type: "input",
            message: "Table of Contents?",
            name: "toc"
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
            type: "input",
            message: "License?",
            name: "license"
        }, 
        {
            type: "input",
            message: "Contributors to this app?",
            name: "contributing"
        }
    ]).then((response) => {
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
