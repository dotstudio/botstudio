'use strict'

const exec = require('child_process').exec;
let command = 'cd web-test && git pull origin master && git push special master';
let mes = '';

module.exports = (cb) => {
    exec(command, (error, stdout, stderr) => {
        if (error != null) {
            mes += 'デプロイに失敗しました!\n'+'```'+error+'```';
        }else{
            mes += 'デプロイ成功!\n'+'```'+stdout+'```';
        }

        cb(mes);
    });
}