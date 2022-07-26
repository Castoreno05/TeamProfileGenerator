const path = require("path");
const fs = require("path");

const templatesDir = path.resolve(__dirname, "../templates");

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
        .map(intern = renderIntern(intern))
    );
    return renderMain(html.join(""));
};

const renderManager = manager => {
    
    let template = fs.readFileSync(path.resolve(templates, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    
    return template;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templates, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholder(template, "email", engineer.getEmail());
    template = replacePlaceholder(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());

    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templates, "intern.html"), "utf8");
    template = replacePlaceholder(template, "name", intern.getName());
    template = replacePlaceholder(template, "role", intern.getRole());
    template = replacePlaceholder(template, "email", intern.getEmail());
    template = replacePlaceholder(template, "id", intern.getId());
    template = replacePlaceholder(template, "school", intern.getId());

    return template;
}

const renderHead = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
  };
  
  const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };
  
  module.exports = render;