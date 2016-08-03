'use strict'

const deploy = require('../commons/deploy');
const pm2 = require('pm2');

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
                    _selfReload('dsbot'); //botプログラムの再起動
                })
            });

        }else if(type === ''){
            //別の何か
        }
    }

}

//自身を再起動
function _selfReload(name) {
    pm2.connect((err) => {

        if (err) {
            console.error(err);
            process.exit(2);
        }

        pm2.restart({name: name}, (err, apps) => {
            pm2.disconnect();   // Disconnect from PM2
            if (err) throw err;
            // console.log(apps);
        });
    });
}