// Need subclass that will inherit the properties and methods of parent class
// When the class is created it needs the ability to export
// Export Employee into Engineer

const Employee = require("./Employee");

// Employee is the child of the employees parent class
class Engineer extends Employee {

    constructor(name, id, email, github){
        // Need to access the properties in Employee class
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }  
}

module.exports = Engineer;