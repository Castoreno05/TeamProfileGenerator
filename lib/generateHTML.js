const path = require("path");
const fs = require("fs");

const src = path.resolve(__dirname, "../src");

const render = employees => {
    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );
    return renderHead(html.join(""));
};

const renderManager = manager => {
    
    var template = fs.readFileSync(path.resolve(src, "manager.html"), "utf8");
    template = replacePlaceholder(template, "name", manager.getName());
    template = replacePlaceholder(template, "role", manager.getRole());
    template = replacePlaceholder(template, "email", manager.getEmail());
    template = replacePlaceholder(template, "id", manager.getId());
    template = replacePlaceholder(template, "officeNumber", manager.getOfficeNumber());
    
    return template;
};

const renderEngineer = engineer => {
    var template = fs.readFileSync(path.resolve(src, "engineer.html"), "utf8");
    template = replacePlaceholder(template, "name", engineer.getName());
    template = replacePlaceholder(template, "role", engineer.getRole());
    template = replacePlaceholder(template, "email", engineer.getEmail());
    template = replacePlaceholder(template, "id", engineer.getId());
    template = replacePlaceholder(template, "github", engineer.getGithub());

    return template;
};

const renderIntern = intern => {
    var template = fs.readFileSync(path.resolve(src, "intern.html"), "utf8");
    template = replacePlaceholder(template, "name", intern.getName());
    template = replacePlaceholder(template, "role", intern.getRole());
    template = replacePlaceholder(template, "email", intern.getEmail());
    template = replacePlaceholder(template, "id", intern.getId());
    template = replacePlaceholder(template, "school", intern.getSchool());

    return template;
}

const renderHead = html => {
    const template = fs.readFileSync(path.resolve(src, "head.html"), "utf8");
    return replacePlaceholder(template, "team", html);
};
  
const replacePlaceholder = (template, placeholder, value) => {
    //const pattern = new RegExp("{{" + placeholder + "}}", "gm"); // {{ team }}
    //return template.replace(pattern, value);
    return template.replace(`{{${placeholder}}}`, value)
};
  
  module.exports = render;