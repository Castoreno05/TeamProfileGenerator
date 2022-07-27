const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const render = require("./lib/generateHTML");

const results_dir = path.resolve(__dirname, "results");
const outputPath = path.join(results_dir, "employee.html");

var roster = [];

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
        roster.push(new Manager(answers.name, answers.id, answers.email, officeNumber));
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
        roster.push(new Engineer(answers.name,answers.id,answers.email, github));
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
        roster.push(new Intern(answers.name,answers.id,answers.email, school));
    }
    else {
        return false;
    };

}


async function startRender() {
    let addMore = true;
    while (addMore) {
        const employee = await renderEmployee();

        //ask if they want to keep going. 
        let keepGoing = await inquirer.prompt({
            message: "Would you like to add another employee?",
            name: "continue",
            type: "list",
            choices: ["Yes", "No"]
        });

        if (keepGoing.continue == "Yes") {
            addMore = true;
        }
        else {
            addMore = false;
        }
    }

    var allHTML = render(roster);

    // check if directory exists
    if (fs.existsSync(results_dir)) {
        //if it exists, create file 
        fs.writeFile(outputPath, allHTML, function (err) {
            if (err) {
                throw (err);
            }
            console.log("File has been created!");
        });

    } else {
        //create directory
        fs.mkdir("./results/", { recursive: true }, function (err) {
            if (err) {
                throw (err);
            };
        });

        //now write to file 
        fs.writeFile("./results/employee.html", allHTML, function (err) {
            if (err) {
                throw (err);
            }
            console.log("Folder and File have been created!");
        });

    }

}

startRender();