// Import Employee
const Employee = require('../lib/Employee');
// need to test Employee to see if "name" will take in a string
describe("Employee", () => {
    describe("name", () => {
        it('should set a name per the constructor argument', () => {
            const name = "Matthew";
            const employee = new Employee(name);
            expect(employee.name).toEqual(name);
        });
    });
    // Need to test Employee to see if "id" will take in a number
    describe("id", () => {
        it('should set a id per the constructor argument', () => {
            const value = 500;
            const employee = new Employee("Matt", value);
            expect(employee.id).toEqual(value);
        });
    });
    // Need to test Employee to see if "email" will take in an email
    describe("email", () => {
        it('should set a email per the constructor argument', () => {
            const email = "matt@test.com";
            const employee = new Employee("Matt", 500, email);
            expect(employee.email).toEqual(email);
        });
    });
    // Need to test Employee to see if it is equal to an object
    it('should set the properties into an object', () => {
        const employee = new Employee("Matthew", "28", "matt@test.com");
        expect(typeof (employee)).toEqual("object");
    });
    // Test getRole()
    describe("getRole()", () => {
        it('should return the class Employee', () => {
            const test = "Employee";
            const employee = new Employee("Matthew", 28, "matthew.c@test.com");
            expect(employee.getRole()).toEqual(test);
        });
    });
    // Test getEmail()
    describe("getEmail()", () => {
        it('should return the property email', () => {
            const test = "matthew.test@yahoo.com";
            const employee = new Employee("Matt", 95, test);
            expect(employee.getEmail()).toEqual(test)
        });
    });
    // Test getId()
    describe("getId()", () => {
        it('should return the property email', () => {
            const test = 45;
            const employee = new Employee("Matt", test, "matthew.test@yahoo.com");
            expect(employee.getId()).toEqual(test)
        });
    });
    // Test getName() 
    describe("getName()", () => {
        it('should return the property email', () => {
            const test = "Matthew";
            const employee = new Employee(test, 850, "matthew.test@yahoo.com");
            expect(employee.getName()).toEqual(test);
        });
    });
});
