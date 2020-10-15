const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {}

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
        console.log("Success!");
        writeToFile("README.md", response);
    }).catch(error => {
        if (error.isTtyError) {
            console.log("Prompt could not be rendered in the current environment.");
        } else {
            console.log("Something went wrong. Please try again.");
        }
    })
}

// function call to initialize program
init();
