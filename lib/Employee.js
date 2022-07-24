// Need a class that will have the properties of Employee.
// When the class is created it needs to have the ability to export.
// Employee will be the parent class for all other classes

class Employee {
    // Required properties
    constructor(name, id, email){

        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Required methods
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

}
module.exports = Employee;