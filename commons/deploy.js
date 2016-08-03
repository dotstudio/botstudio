'use strict'

const exec = require('child_process').exec;

module.exports = (command, cb) => {
    exec(command, (error, stdout, stderr) => {
        let mes = '\n\n';
        if (error != null) {
            mes += 'デプロイに失敗しました!\n'+'`'+error+'`';
        }else{
            mes += 'デプロイ成功!\n'+'`'+stdout+'`';
        }

        cb(mes);
    });
}