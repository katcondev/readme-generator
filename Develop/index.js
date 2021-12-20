// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const util = require("util");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);


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
  
};

// questions().then(answers => console.log(answers));

// TODO: Create a function to write README file
// Async function using util.promisify 
async function init() {
  try {
      // Ask user questions and generate responses
      const answers = await questions();
      const generateContent = generateMarkdown(answers);
      // Write new README.md to dist directory
      await writeFileAsync('./dist/README.md', generateContent);
      console.log('Successfully wrote to README.md');
  }   catch(err) {
      console.log(err);
  }
}

// // Function call to initialize app
init();