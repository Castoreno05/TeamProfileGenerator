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
    template = replacePlaceholders(template, "id", manager.gerId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    
    return template;
}