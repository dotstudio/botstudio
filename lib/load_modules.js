'use strict'

const fs = require('fs');

module.exports = () => {
    const SCRIPTS_DIR = __dirname+'/../scripts';
    let files = fs.readdirSync(SCRIPTS_DIR);
    let fileList = [];
    files.filter((file) => {
        return file.match(/.*\.js$/); //絞り込み
    }).forEach((file)=>{
        file = file.split('.')[0];
        fileList[file]=require(`${SCRIPTS_DIR}/${file}`);
    });
    return fileList;
}

