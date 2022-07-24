// Need subclass that will inherit the properties and methods of parent class
// When the class is created it needs the ability to export
// Export Employee into Manager.js

const Employee = require("./Employee");

// Manager is the child class of the Employee parent class
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        // Need to access the properties in Employee class
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }   
}

module.exports = Manager;