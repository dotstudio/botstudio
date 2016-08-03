'use strict'

const deploy = require('../commons/deploy');

module.exports = (gitter) => {
    require('./lib/server')(webhook);
    function webhook(request,type) {
        //console.log(request);

        //Bot自体の自動デプロイ -> DevRel-ubuntuへ
        if(type === 'bot-deploy'){
            
            console.log('デプロイスタート...!');
            let command = 'git stash && git pull origin master';

            gitter.rooms.join('dotstudio/botstudio')
            .then((room) => {
                deploy(command, (mes) => {
                    console.log(mes);
                    // room.send(mes);
                    // room.send('デプロイ完了。 Botが進化しました。');
                })
            });

        }else if(type === ''){
            //別の何か
        }
    }

}