// Import Intern
const Intern = require("../lib/Intern");
// Test getRole()
describe("Intern", () =>{
    describe("getRole()", () =>{
        it('should return the role of intern', () =>{
            const test = "Intern";
            const intern = new Intern("Matt", 34, "matthew@yahoo.com", "UT Austin");
            expect(intern.getRole()).toEqual(test);
        })
    })
})
// Test getSchool()
describe("Intern", () =>{
    describe("getSchool()", () =>{
        it('should return school name', () =>{
            const school = "UT Austin";
            const intern = new Intern("Matt", 28, "matthew@yahoo.com", school);
            expect(intern.getSchool()).toEqual(school);
        });
    });
});
// Test school to see if it holds value
describe("Intern", () =>{
    describe("school", () =>{
        it('should hold the value for school', () =>{
            const school = "University of Houston";
            const intern = new Intern("Matt", 28, "matthew@yahoo.com", "University of Houston");
            expect(intern.school).toEqual(school);
        });
    });
});