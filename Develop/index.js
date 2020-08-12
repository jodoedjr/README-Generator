const generateMD = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const licenses = [new inquirer.Separator("---Popular---"), "None/Other", "MIT", "GNU GPLv2", "GNU GPLv3", "Apache 2.0", "BSD 3-Clause", "BSD 2-Clause", "Unlicense", "GNU LGPLv3", "GNU AGPLv3"];

// array of questions for user
const questions = [
    //title
    {
        type: "input",
        name: "title",
        message: "Project Title: "
    },
    //Sections: Description, Installation, Usage, License, Contributing, Tests, and Questions
    //description, installation instructions, usage information, contribution guidelines, and test instructions
    {
        type: "input",
        name: "description",
        message: "Enter your project description: "
    },
    {
        type: "input",
        name: "install",
        message: "Enter your project installation instructions: "
    },
    {
        type: "input",
        name: "usage",
        message: "Enter your project usage information: "
    },
    {
        //Choose a license from a list of options - add a badge for that license at the top of the README, and a notice is added to the License section
        type: "list",
        message: "Select a license for your application: \nCheckout https://choosealicense.com/ for more info",
        name: "license",
        choices: licenses
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter your project contribution guidelines: "
    },
    {
        type: "input",
        name: "test",
        message: "Enter your project test instructions: "
    },
    {
        //Github user name - added to questions section, with a link
        type: "input",
        name: "github",
        message: "Enter your GitHub user name: "
    },
    {
        //Email address - added to questions sections, with instructions on how to reach out with additional questions
        type: "input",
        name: "email",
        message: "Enter an email for user questions (or leave blank): "
    },
    //README has table of contents with links to sections
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(data){
    console.log(data);
    generateMarkdown(data);
});

}

// function call to initialize program
init();
