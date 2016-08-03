/**
 * 定期実行スクリプト
 */

'use strict'

const CronJob = require('cron').CronJob;
const TIME_ZONE = 'Asia/Tokyo';
const deploy = require('../commons/deploy'); //deploy

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
        gitter.rooms.join('dotstudio/botstudio')
        .then((room) => {
            room.send('@/all 明日は燃えるゴミの日ですよ！');
        }); 
    }, () => {},true,TIME_ZONE);

    //deploy: testサーバーにあるものをpullしてdeploy
    new CronJob('00 50 16 * * 1-5', () => {
        gitter.rooms.join('dotstudio/ds-bot')
        .then((room) => {
            room.send(deploy());
        });
    }, () => {},true,TIME_ZONE);

}