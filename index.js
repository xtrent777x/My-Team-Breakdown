const inquirer = require('inquirer');
const Manager = require ('./lib:/Manager');
const Engineer = require ('./lib:/Engineer');
const Intern = require ('./lib:/Intern');
const emailValidator = require ('email-validator') //https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer- https://www.npmjs.com/package/email-validator
const fs = require('fs');
const path = require('path');  //https://www.npmjs.com/package/inquirer-file-path
// Classes to include Employee/Manager/Engineer/Intern



const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'create.html');

const render = require('./lib:/render');        //https://www.section.io/engineering-education/rendering-html-pages-as-a-http-server-response-using-node-js/ https://codeforgeek.com/render-html-file-expressjs/
const Employee = require('./lib:/Employee');

const team = [];
let setTeam = true;

// // questions set up from frame my https://github.com/xtrent777x/terminal-readme/blob/main/index.js
// // Manager questions
// // Manager Name
// // ID
// // Email
// //Office Number
const questions = {
    Manager: [
        {
            type: 'input',
            name: 'name',
            message: 'Managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true
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
                    return true
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
            }
        },
        {
            type: 'list',
            name: 'addNew',
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
                    return true
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
                    return true
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
                    return true
                } else {
                    console.log('Enter GitHub user name!');
                    return false;
                  }
                }
          },
        {
            type: 'list',
            name: 'addNew',
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
                    return true
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
            validate: nameInput => {
                if (nameInput) {
                    return true
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
            name: 'school',
            message: 'What school is the intern attending?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Enter interns School');
                    return false;
                  }
                }
        },
        {
            type: 'list',
            name: 'addNew',
            message: 'Do you want to add another employee',
            choices: ['yes', 'no']
        }
    ]
};

//after manager is created need option to add other employees

const selectEmployeeType = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'Please choose the role for the employee',
        choices: ['Manager', 'Engineer', 'Intern'],
    }
];

function addNewEmployee() {
    inquirer.prompt(selectEmployeeType)
        .then(answer => {

            if (answer.employeeType === 'Manager') {
                if (setTeam) {
                    inquirer.prompt(questions.Manager)
                        .then(answer => {
                            const manager = new Manager
                                (
                                    answer.name,
                                    answer.id,
                                    answer.email,
                                    answer.officeNumber
                                );

                            team.push(manager);
                            setTeam = false;
                            if (answer.addNew === 'yes') {
                                addNewEmployee();
                            } else {
                                generate();
                            }
                        });
                } else {
                    console.log('You already chose the manager!')
                    addNewEmployee();
                }


            } else if (answer.employeeType === 'Engineer') {
                inquirer.prompt(questions.Engineer)
                    .then(answer => {
                        const engineer = new Engineer
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.github
                            );
                        team.push(engineer);
                        if (answer.addNew === 'yes') {
                            addNewEmployee();
                        } else {
                            generate();
                        };
                    });

            } else if (answer.employeeType === 'Intern') {
                inquirer.prompt(questions.Intern)
                    .then(answer => {
                        const intern = new Intern
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.school
                            );
                        team.push(intern);
                        if (answer.addNew === 'yes') {
                            addNewEmployee();
                        } else {
                            generate();
                        };
                    });
            };
        });
};

addNewEmployee();



function generate() {
    fs.writeFileSync(distPath, render(team), "utf-8");
    process.exit(0);
}



