'use strict'

// const execSync = require('child_process').execSync;
const execSpawn = require('child_process').spawnSync;
module.exports = ()=> {
    let command = "cd web-test && git pull origin master && git push special master";
    let result = execSpawn(command, {encoding:'utf8'});
    let mes = '';
    if(result.error || result.stderr){        
        console.log('エラーあり');
        mes += "" + result.stderr + result.error;
    }else{
        console.log('成功');
        mes += "" + result.stdout;
    }
    return mes;
}