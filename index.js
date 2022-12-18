const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');

const teamMembers = [];
const employeeIds = [];

function runApp () {
    function addManager() {
        inquirer
          .prompt([
            {
              type: "input",
              name: "managerName",
              message: "Please enter team manager's name.",
              validate: (value) => {
                if (value !== '') {
                    return true;
                } else {
                    return "Please enter at least one character."
                }
              },
            },
            {
              type: "input",
              name: "managerID",
              message: "Please enter the team manager's employee ID.",
              validate: (value) => {
                if (typeof value === number) {
                    return true;
                } else {
                    return "The employee's ID number needs to be greater than 0."
                }
              },
            },
            {
              type: "input",
              name: "managerEmail",
              message: "Please enter the team manager's email.",
              validate: (value) => {
                if (value !== '') {
                    return true;
                } else {
                    return "Please enter a valid email address."
                }
              },
            },
            {
              type: "input",
              name: "managerOfficeNum",
              message: "Please enter the team manager's office number.",
              validate: (value) => {
                if (typeof value === number) {
                    return true;
                } else {
                    return "The employee's office number needs to be greater than 0."
                }
              },
            },
          ])
          .then((value) => {
            const manager = new Manager(
                value.managerName,
                value.managerID,
                value.managerEmail,
                value.managerOfficeNum
            );
            teamMembers.push(manager);
            employeeIds.push(value.managerID);
            createTeam();
          });
    }

    function createTeam() {
        inquirer
          .prompt([
            {
              type: "list",
              name: "employeeChoice",
              messgae: "Which type of team member would you like to add?",
              choices: [
                "Engineer",
                "Intern",
                "I don't want to add anymore employees"
              ],
            },
          ])
          .then((userInput) => {
            switch (userInput.employeeChoice) {
                case "Engineer":
                  addEngineer();
                  break;
                case "Intern":
                  addIntern();
                  break;
                default:
                  buildTeam();
            }
          });
    }

    function addEngineer() {
        inquirer
        prompt([
            {
              type: "input",
              name: "engineerName",
              message: "Please enter your engineer's name.",
              validate: (value) => {
                if (value !== '') {
                    return true;
                } else {
                    return "Please enter at least one character."
                }
              },
            },
            {
              type: "input",
              name: "engineerID",
              message: "Please enter your engineer's employee ID.",
              validate: (value) => {
                if (typeof value === number) {
                    return true;
                } else {
                    return "The employee's ID number needs to be greater than 0."
                }
              },
            },
            {
              type: "input",
              name: "engineerEmail",
              message: "Please enter your engineer's email.",
              validate: (value) => {
                if (value !== '') {
                    return true;
                } else {
                    return "Please enter a valid email address."
                }
              },
            },
            {
              type: "input",
              name: "engineerGithub",
              message: "Please enter your engineer's GitHub username.",
              validate: (value) => {
                if (value !== '') {
                    return true;
                } else {
                    return "Please enter at least one character."
                }
              }
            }
          ])
          .then((value) => {
            const engineer = new Engineer(
                value.engineerName,
                value.engineerID,
                value.engineerEmail,
                value.engineerGithub
            );
            teamMembers.push(engineer);
            employeeIds.push(value.enginerID);
            createTeam();
          });
    }

    function addIntern() {
        inquirer
          .prompt([
            {
              type: "input",
              name: "internName",
              message: "Please enter your intern's name.",
              validate: (value) => {
                if (value !== '') {
                    return true;
                } else {
                    return "Please enter at least one character."
                }
              }
            },
            {
              type: "input",
              name: "internID",
              message: "Please enter your intern's ID.",
              validate: (value) => {
                if (typeof value === number) {
                    return true;
                } else {
                    return "The employee's ID number needs to be greater than 0."
                }
              }
            },
            {
              type: "input",
              name: "internEmail",
              message: "Please enter your intern's email address.",
              validate: (value) => {
                if (value !== '') {
                    return true;
                } else {
                    return "Please enter a valid email address."
                }
              }
            },
            {
              type: "input",
              name: "internSchool",
              message: "Please enter your intern's school name.",
              validate: (value) => {
                if (value !== '') {
                    return true;
                } else {
                    return "Please enter at least one character."
                }
              }
            }
          ])
          .then((value) => {
            const intern = new Intern(
                value.internName,
                value.internID,
                value.internEmail,
                value.internSchool
            );
            teamMembers.push(intern);
            employeeIds.push(value.internID);
            createTeam();
          });
    }
}