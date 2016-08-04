'use strict'

const deploy = require('../commons/deploy');
const self_reload = require('../commons/self_reload');

module.exports = (gitter) => {
    require('./lib/server')(webhook);
    function webhook(request,type) {
        //console.log(request);
        //Bot自体の自動デプロイ -> DevRel-ubuntuへ
        if(type === 'bot-deploy'){
            
            console.log('Bot自身のデプロイスタート...!');
            let command = 'git stash && git pull origin master';

            gitter.rooms.join('dotstudio/botstudio')
            .then((room) => {
                deploy(command, (mes) => {
                    console.log(mes);
                    // room.send(mes);
                    // room.send('デプロイ完了。 Botが進化しました。');
                    self_reload(); //botプログラムの再起動
                })
            });

        }
        
        //本番デプロイした時の通知
        else if(type === 'production'){
            gitter.rooms.join('dotstudio/ds-bot')
            .then((room) => {
                room.send('本番環境にデプロイしました！');
            });
        }

    }

}