// Need subclass that will inherit the properties and methods of parent class
// When the class is created it needs the ability to export
// Export Employee into Intern.js

const Employee = require("./Employee");

// Intern is the child class of the Employee parent class
class Intern extends Employee {

    constructor(name, id, email, school) {
        // Need to access the properties in Employee class
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;