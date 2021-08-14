const inquirer = require('inquirer');
const Manager = require ('./lib:/Manager');
const Engineer = require ('./lib:/Engineer');
const Intern = require ('./lib:/Intern');
const emailValidator = require ('email-validator') //https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-
const fs = require('fs');
                         
// classes to include Employee/Manager/Engineer/Intern







// Manager questions
// Manager Name
// ID
// Email
//Office Number
const questions = {
    Manager: [
        {
            type: 'input',
            name: 'name',
            message: 'Managers name?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Enter managers name');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Managers employee id?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Enter employee id');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Managers email address?',
            validate: nameInput => {
                if (emailValidator.validate(nameInput)) {
                    return true
                } else { console.log('Enter a valid email address.')
                return false;
             }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Managers office number?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else { return 'Enter managers office number.'}
            },
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Do you want to add another employee?',
            choices: ['yes', 'no']
        }
    ],
    //Engineer questions
    //name
    //ID
    // EMAIL
    //github

    Engineer: [
        {
            type: 'input',
            name: 'name',
            message: 'Engineers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                  } else {
                    console.log('Enter engineers name');
                    return false;
                  }
                }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Engineers id?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                  } else {
                    console.log('Enter engineers id');
                    return false;
                  }
                }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Engineers email address?',
            validate: nameInput => {
                if (emailValidator.validate(nameInput)) {
                    return true
                } else { console.log('Enter a valid email address.')
                return false;
             }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Engineers GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Enter GitHub user name!');
                  return false;
                }
              }
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Do you want to add another employee?',
            choices: ['yes', 'no']
        }
    ],
    //Intern questions
    // Name
    // ID
    // EMAIL
    // School

    Intern: [
        {
            type: 'input',
            name: 'name',
            message: 'Interns name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                  } else {
                    console.log('Enter interns name');
                    return false;
                  }
                }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Interns id?',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                  } else {
                    console.log('Enter interns id');
                    return false;
                  }
                }
        },   
        {
            type: 'input',
            name: 'email',
            message: 'Interns email address?',
            validate: (nameInput) => {
                if (emailValidator.validate(nameInput)) {
                    return true
                } else { console.log('Enter a valid email address.')
                return false;
             }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school is the intern attending?',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                  } else {
                    console.log('Enter interns School');
                    return false;
                  }
                }
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Do you want to add another employee',
            choices: ['yes', 'no']
        }
    ]
};



//after manager is created need option to add other employees




