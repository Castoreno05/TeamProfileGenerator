const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");

async function renderEmployee() {
    // Questions about employees info
    let questions = [{
        type: "input",
        name: "employeeName",
        message: "Provide an employee name"
    },
    {
        type: "input",
        name: "employeeEmail",
        message: "Provide the employee's Email"
    },
    {
        type: "input",
        name: "employeeId",
        message: "Provide the employee's Id"
    },
    {
        type: "list",
        name: "selectedEmployee",
        message: "Which role will this employee have?",
        choices: ["Manager", "Engineer", "Intern"]
    }];

    var answers = await inquirer.prompt(questions);

    if (answers.selectedEmployee === "Manager") {
        let manager = await inquirer.prompt({
            type: 'input',
            name: 'officeNumber',
            message: "Enter managers office number"
        });

        let officeNumber = manager.officeNumber;
        // console.log(officeNumber);
        // Need to add officeNumber to Manager
    }
    else if (answers.selectedEmployee === "Engineer") {
        let engineer = await inquirer.prompt({
            type: 'input',
            name: 'github',
            message: 'Enter Github for Engineer'
        });

        let github = engineer.github;
        // console.log(github);
        // Need to add github to Engineer
    }
    else if (answers.selectedEmployee === "Intern") {
        let intern = await inquirer.prompt({
            type: 'input',
            name: 'school',
            message: 'Enter School Name for Intern'
        });

        let school = intern.school;
        // console.log(school);
        // Need to add school to Intern
    }
    else {
        return false;
    };

}

renderEmployee();