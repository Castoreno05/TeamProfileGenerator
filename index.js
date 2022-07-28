const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderTeam = require("./lib/generateHTML");
const distDir = path.resolve(__dirname, "dist");
const join = path.join(distDir, "employee.html");

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
    // Use the answers to select the role of the employee
    // Wait for the answer to determine the role
    if (answers.selectedEmployee === "Manager") {
        let manager = await inquirer.prompt({
            type: 'input',
            name: 'officeNumber',
            message: "Enter managers office number"
        });
        let officeNumber = manager.officeNumber;
        // console.log(officeNumber);
        // console.log(answers);
        // Need to add officeNumber to Manager
        roster.push(new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, officeNumber));
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
        roster.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, github));
    }
    else if (answers.selectedEmployee === "Intern") {
        let intern = await inquirer.prompt({
            type: 'input',
            name: 'school',
            message: 'Enter School Name for Intern'
        });
        let school = intern.school;
        console.log(school);
        // Need to add school to Intern
        roster.push(new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, school));
    }
    else {
        return false;
    };

};


async function startRender() {
    // Need a question to see if the user will want to add more employees
    let moreQs = true;
    while(moreQs){
        const employee = await renderEmployee();
        //  
        let finalPrompt = await inquirer.prompt({
            type: "list",
            name: "continue",
            message: "Continue and add more employees?",
            choices: ["Yes", "No"]
        });

        if(finalPrompt.continue == "Yes"){
            moreQs = true;
        }
        else {
            moreQs = false;
        };
    };
    // If no more employees are needed move on and create files
    var html = renderTeam(roster);
    
    // If the folder exist, create the file
    if (fs.existsSync(distDir)) {
        fs.writeFile(join, html, function (err) {
            if(err){
                throw(err);
            };
            console.log("File has been created!");
        });
    // Else create the folder and file    
    } else {
        fs.mkdir("./dist/", function (err) {
            if(err){
                throw(err);
            };
        });
        fs.writeFile("./dist/employee.html", html, function (err) {
            if(err){
                throw(err);
            };
            console.log("Folder and File have been created!");
        });

    };

};
startRender();