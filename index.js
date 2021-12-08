// Initiate all the requirements
//import inquirer
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//import the employee classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//import generated html
const html = require("./scr/teamHTML");

// Set up Async functions
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

console.clear();
console.log("---------------------------------------------");

// Main function to run application
async function init() {
  try {
    await prompt();

    for (let i = 0; i < teamArray.length; i++) {
      teamString = teamString + html.generateCard(teamArray[i]);
    }

    let finalHtml = html.generateHTML(teamString);
    console.log("---------------------------------------------");
    console.log("Generating index.html file....");
    console.log("---------------------------------------------");
    //generated html
    writeFileAsync("./dist/index.html", finalHtml);

    console.log("your index.html file was created successfully");
  } catch (err) {
    return console.log(err);
  }
}
//user prompts
// Inquirer prompts to gather the general data of the userInput,
async function prompt() {
  let responseDone = "";

  do {
    try {
      console.log("-------------------line---break--------------------------");
      let response = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `What is the employee's name?: `,
        },
        {
          type: "input",
          name: "id",
          message: `Enter the employee's ID: `,
        },
        {
          type: "input",
          name: "email",
          message: `Enter the employee's email address: `,
        },
        {
          type: "list",
          name: "role",
          message: `What what is the employee's role:`,
          choices: ["Engineer", "Intern", "Manager"],
        },
      ]);

      let response2 = "";

      if (response.role === "Engineer") {
        response2 = await inquirer.prompt([
          {
            type: `input`,
            name: `engineer`,
            message: `What is the engineer's github username?:`,
          },
        ]);

        // Add engineer to team Array
        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response2.engineer
        );
        teamArray.push(engineer);
      } else if (response.role === "Intern") {
        response2 = await inquirer.prompt([
          {
            type: "input",
            name: "intern",
            message: `what is your intern's school?:`,
          },
        ]);

        // Add Inter to team Array
        const intern = new Intern(
          response.name,
          response.id,
          response.email,
          response2.intern
        );
        teamArray.push(intern);
      } else if (response.role === "Manager") {
        response2 = await inquirer.prompt([
          {
            type: "input",
            name: "office",
            message: `What is the manager's office number?:`,
          },
        ]);

        // Add Manager to team Array
        const manager = new Manager(
          response.name,
          response.id,
          response.email,
          response2.office
        );
        teamArray.push(manager);
      }
    } catch (err) {
      return console.log(err);
    }

    responseDone = await inquirer.prompt([
      {
        type: "list",
        name: "finish",
        message: "Do you want add more team-members?: ",
        choices: ["Yes", "No"],
      },
    ]);
  } while (responseDone.finish === "Yes");
}

// call the func/run the app,
init();