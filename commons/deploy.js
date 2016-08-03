'use strict'

const execSync = require('child_process').execSync;

module.exports = ()=> {
    let command = "cd web-test && git pull origin master && git push special master";
    let result = "" + execSync(command);
    console.log(result);
    return result;
}