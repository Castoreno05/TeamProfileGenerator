// Import Manager
const Manager = require("../lib/Manager");
// Test getRole()
describe("Manager", () => {
    describe("getRole()", () => {
        it('should return the role of manager', () => {
            const test = "Manager";
            const manager = new Manager("Matt", 1, "matthew.test@yahoo.com", 80);
            expect(manager.getRole()).toEqual(test);
        });
    });
    // Test officeNumber to see if it holds numbers
    describe("officeNumber", () => {
        it('should set a vaule to office number', () => {
            const value = 80;
            const manager = new Manager("Steve", 1, "steve@yahoo.com", value);
            expect(manager.officeNumber).toEqual(value);
        });
    });
    // Test getOfficeNumber()
    describe("getOfficeNumber()", () => {
        it('should return a value for an office number', () => {
            const value = 80;
            const manager = new Manager("Yessica", 1, "yessicaC@yahoo.com", value);
            expect(manager.getOfficeNumber()).toEqual(value);
        });
    });
});