// Import Engineer 
const Engineer = require("../lib/Engineer");

// Test getRole()
describe("Engineer", () =>{
    describe("getRole()", () =>{
        it('should return the role of manager', () =>{
            const test = "Engineer";
            const engineer = new Engineer("Matt", 2, "matthew.g@yahoo.com", "Castoren05");
            expect(engineer.getRole()).toEqual(test);
        });
    });
});
// Test getGithub() 
describe("Engineer", () =>{
    describe("getGithub", () =>{
        it('should return Github name', () =>{
            const github = "Castoreno05";
            const engineer = new Engineer("matt", 99, "matthew.y@yahoo.com", "Castoreno05");
            expect(engineer.getGithub()).toEqual(github);
        });
    });
});
// Test github to see if it holds value
describe("Engineer", () =>{
    describe("github", () =>{
        it('should hold a value for github', () =>{
            const username = "Castoreno05";
            const engineer = new Engineer("Steve", 450, "Matthew.q@yahoo.com", "Castoreno05");
            expect(engineer.github).toEqual(username);
        });
    });
});