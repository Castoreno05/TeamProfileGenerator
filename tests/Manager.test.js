// Import Employee and Manager
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Employee", () => {
    describe("officeNumber", () => {
        const number = 500;
        const manager = new Manager("Matt", 1, "matthew.test@yahoo.com", number);
        expect(manager.officeNumber).toEqual(number);
    });
});