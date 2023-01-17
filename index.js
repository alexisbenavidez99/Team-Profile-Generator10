const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHTML = require('./src/page-template.js');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const teamMembers = [];
const employeeIds = [];

    function addManager() {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Please enter team manager's name.",
              name: "managerName",
              validate: (value) => {
                if (value !== '') {
                    return true;
                } else {
                    return "Enter at least one character."
                }
              },
            },
            {
              type: "input",
              message: "Please enter the team manager's employee ID.",
              name: "managerID",
              validate: (value) => {
                const parsedVal = parseInt(value)
                if (isNaN(parsedVal)) {
                  return "Enter at least one character."
                } else {
                  return true;
                }
              },
            },
            {
              type: "input",
              message: "Please enter the team manager's email.",
              name: "managerEmail",
              validate: (value) => {
                if (value !== '') {
                    return true;
                } else {
                    return "Enter at least one character."
                }
              },
            },
            {
              type: "input",
              message: "Please enter the team manager's office number.",
              name: "managerOfficeNum",
              validate: (value) => {
                const parsedVal = parseInt(value)
                if (isNaN(parsedVal)) {
                  return "Enter at least one character."
                } else {
                  return true;
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
            formTeamMembers();
          });
    }

    function formTeamMembers() {
        inquirer
          .prompt([
            {
              type: "list",
              messgae: "Which type of team member would you like to add?",
              name: "employeeInput",
              choices: [
                "Intern",
                "Engineer",
                "No more employees to add."
              ],
            },
          ])
          .then((userInput) => {
            if (userInput.employeeInput === 'Intern') {
              addIntern();
            }
            else if (userInput.employeeInput === 'Engineer') {
              addEngineer();
            }
            else {
              makeTeam();
            }
          });
    }

    function addEngineer() {
        inquirer
        .prompt([
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
                const parsedVal = parseInt(value)
                if (isNaN(parsedVal)) {
                  return "The employee's ID number needs to be greater than 0."
                } else {
                  return true;
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
                const parsedVal = parseInt(value)
                if (isNaN(parsedVal)) {
                  return "The employee's ID number needs to be greater than 0."
                } else {
                  return true;
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
  
    function makeTeam() {
        fs.writeFileSync(distPath, generateHTML(teamMembers), 'utf-8');
    }

addManager();
