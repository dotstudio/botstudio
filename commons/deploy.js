'use strict'

const exec = require('child_process').exec;
let mes = '';

module.exports = (command, cb) => {
    exec(command, (error, stdout, stderr) => {
        if (error != null) {
            mes += 'デプロイに失敗しました!\n'+'```\n'+error+'\n```';
        }else{
            mes += 'デプロイ成功!\n'+'```\n'+stdout+'\n```';
        }

        cb(mes);
    });
}