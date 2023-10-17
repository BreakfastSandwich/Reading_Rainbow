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

    const ReadMe =
    `
    # ${data.title}

    ## Description    
        ${data.description}
    
    
    ## Table of Contents
    
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [Tests](#tests)
    - [License](#license)
    - [Contact](#Contact)
    - [GitHub](#GitHub)
    
    ## Installation
    
        ${data.installation}
    
    ## Usage
    
        ${data.usage}
    
    ## Contributions
    
        ${data.contribute}
    
    ## Tests
    
        ${data.test}
    
    ## Contact Me 
    
        ${data.email}
    
    ## Check out my GitHub
    
    https://github.com/${data.github}  
     
  
    `;

    fs.writeFile('README.md', ReadMe, (error) =>
      error ? console.error(error) : console.log('sucess')
    );
  });
