const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const { validate } = require('@babel/types');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter Manager name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter Manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter Manager ID.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter Manager ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter Manager email.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter manager email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'Please enter manager office number.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter manager office number!');
                    return false;
                }
            }  
        }
    ]).then(data => {
        const managerCard = new Manager(
            data.name,
            data.id,
            data.email,
            data.officeNumber
        );

        managerArray.push(managerCard);
        promptUser();
    });
};