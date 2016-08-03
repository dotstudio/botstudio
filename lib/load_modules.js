'use strict'

const fs = require('fs');

module.exports = () => {
    const SCRIPTS_DIR = __dirname+'/../scripts';
    let files = fs.readdirSync(SCRIPTS_DIR);
    let fileList = [];
    // console.log(files);
    // files.filter((file) => {
    //     // return file.match(/.*\.js$/); //絞り込み
    // })
    
    files.forEach((file)=>{
        // file = file.split('.')[0];
        fileList[file]=require(`${SCRIPTS_DIR}/${file}/index`);
    });

    // console.log(fileList);
    return fileList;
}

