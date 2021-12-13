// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./utils/generate-site.js');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your project title!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: ",
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter your project title!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project usage for?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: ",
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            } else {
              console.log('Please enter your github username!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
])
   .then((res) => {
    
    })
    .catch((err) => {
    console.log(err);
    })
};

console.log(res);

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
