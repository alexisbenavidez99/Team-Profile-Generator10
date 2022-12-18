const inquirer = require("inquirer");
const engineer = require("./Engineer.js");
const intern = require("./Intern.js");
const manager = require("./Manager.js");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is your name?",
              validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name.");
                }
              }
            }
          ])
    }
    getId() {
        inquirer
          .prompt([
            {
              type: "input",
              name: "id",
              message: "What is your employee ID?",
              validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter a valid ID.");
                }
              }
            }
          ])
    }
    getEmail() {
        inquirer
          .prompt([
            {
              type: "input",
              name: "email",
              message: "What is your email?",
              validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter a vaild email.")
                }
              }
            }
          ])
    }
    getRole() {
        inquirer
          .prompt([
            {
              type: "list",
              name: "role",
              message: "Please select your role:",
              choices: [ "Engineer", "Intern", "Manager" ],
              validate: (roleInput) => {
                if (roleInput) {
                    return true;
                } else {
                    console.log("Please choose a role.");
                    return false;
                }
              }
            }
          ])
    }
}