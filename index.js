// title of project -
// description -
// table of contents - must link to portions of the page
// installation -
// usage - 
// License -
// contributions - 
// tests - 
// Questions - ask for email and create a link to reach out
// Github UserName - use to create a link to the user's github page


const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your Project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe what your Project does.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Does this Project require installation? if so, how would another user install this Project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the use case of your Project?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What licenses does this Project require?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Did anyone help to make this Project possible? If so, who?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please explain any tests this Project requires?',
    },
    {
      type: 'input',
      name: 'contact',
      message: 'What is the best email address for others to reach you?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub UserName?',
    },
  ])
  .then((data) => {
    console.log(data);

    const ReadMe.MD = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile('ReadMe.MD', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);
  });


  // TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();