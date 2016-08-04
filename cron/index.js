/**
 * 定期実行スクリプト
 */

'use strict'

const CronJob = require('cron').CronJob;
const TIME_ZONE = 'Asia/Tokyo';
const deploy = require('../commons/deploy'); //deploy
const DB = require('../lib/storage'); //ストレージ

module.exports = (gitter) => {    
    //日報催促
    new CronJob('00 15 10 * * 1-5', () => {
        gitter.rooms.join('dotstudio/ds-bot')
        .then((room) => {
            room.send('@/all Nippoを出しましょう！');
        }); 
    }, () => {},true,TIME_ZONE);

    //ゴミ出し催促
    new CronJob('00 55 18 * * 0,3', () => {
        gitter.rooms.join('dotstudio/ds-bot')
        .then((room) => {
            room.send('@/all 明日は燃えるゴミの日ですよ！');
        });
    }, () => {},true,TIME_ZONE);

    //deploy: testサーバにあるものをpullして -> 本番deploy
    new CronJob('00 11 10 * * 1-5', () => {
        if(DB.checkBlock() === 'on'){
            console.log('予約投稿時間ですがブロックされました。');
            return;
        }

        console.log('定期デプロイスタート..');
        let command = 'cd web-test && git pull origin master && git push special master';

        gitter.rooms.join('dotstudio/ds-bot')
        .then((room) => {
            deploy(command, (mes)=>{
                console.log(mes);
                room.send(mes);
            })
        });

    }, () => {},true,TIME_ZONE);

    //予約投稿ブロックがonの場合、ブロックを解除
    new CronJob('00 00 12 * * 1-5', () => {
        if(DB.checkBlock() === 'off') return;

        DB.updateBlock('off');
        gitter.rooms.join('dotstudio/ds-bot')
        .then((room) => {
            room.send('ブロッキング解除');
        });

    }, () => {},true,TIME_ZONE);

}