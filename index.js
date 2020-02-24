const questions = [{
    type: 'input',
    message: "Enter your GitHub username:",
    name: "username"
},
{
    type: 'input',
    message: "Enter your GitHub username:",
    name: "username"
}

];

function writeToFile(fileName, data) {
}

function init() {

}

init();

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
    .prompt({
        type: 'input',
        message: "Enter your GitHub username:",
        name: "username"
    })
    .then(function ({ username }) {
        console.log(username)
        const queryUrl = `https://api.github.com/users/${username}`;

        axios.get(queryUrl).then(function (res) {
            console.log(res.data)
            fs.writeFile("READme.md", `
            Title ${username}
            Description
            Table of Contents
            Installation
            Usage
            License
            Contributing
            Tests
            Questions
                        
                        
            
            
            
            
            
            
            `, function (err) {

                if (err) {
                    return console.log(err);
                }

                console.log("Success!");

            });



        })
            .catch(err => {
                console.log(err)
            })



    }).catch(err => {
        console.log(err)
    })