const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("name", () => {
        it('should set a name per the constructor argument', () => {
            const name = "Matthew";
            const employee = new Employee(name);
            expect(employee.name).toEqual(name);
        });
    });
});

describe("Employee", () => {
    describe("id", () => {
        it('should set a id per the constructor argument', () => {
            const value = 500;
            const employee = new Employee("Matt", value);
            expect(employee.id).toEqual(value);
        });
    });
});
// Need to test Employee to see if "email" will take in an email
describe("Employee", () => {
    describe("email", () => {
        it('should set a email per the constructor argument', () => {
            const email = "matt@test.com";
            const employee = new Employee("Matt", 500, email);
            expect(employee.email).toEqual(email);
        });
    });
});
// Need to test Employee to see if it is equal to an object
describe("Employee", () => {
    it('should set the properties into an object', () => {
        const employee = new Employee("Matthew", "28", "matt@test.com");
        expect(typeof (employee)).toEqual("object");
    });
});

describe("Employee", () => {
    describe("getRole()", () => {
        it('should return the class Employee', () => {
            const test = "Employee";
            const employee = new Employee("Matthew", 28, "matthew.c@test.com");
            expect(employee.getRole()).toEqual(test); 
        });
    });
});

describe("Employee", () => {
    describe("getEmail()", () => {
        it('should return the property email', () => {
            const test = "matthew.test@yahoo.com";
            const employee = new Employee("Matt", 95, test);
            expect(employee.getEmail()).toEqual(test)
        });
    });
});

describe("Employee", () => {
    describe("getId()", () => {
        it('should return the property email', () => {
            const test = 45;
            const employee = new Employee("Matt", test, "matthew.test@yahoo.com");
            expect(employee.getId()).toEqual(test)
        });
    });
});

describe("Employee", () => {
    describe("getName()", () => {
        it('should return the property email', () => {
            const test = "Matthew";
            const employee = new Employee(test, 850, "matthew.test@yahoo.com");
            expect(employee.getName()).toEqual(test);
        });
    });
});


