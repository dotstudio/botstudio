/**
 * 定期実行スクリプト
 */

'use strict'

let CronJob = require('cron').CronJob;

module.exports = (gitter) => {    
    //日報催促
    new CronJob('00 15 10 * * 1-5', () => {
        gitter.rooms.join('dotstudio/ds-bot')
        .then((room) => {
            room.send('@/all Nippoを出しましょう！');
        }); 
    }, () => {},true,'Asia/Tokyo');

    //ゴミ出し催促
    new CronJob('00 55 18 * * 0,3', () => {
        gitter.rooms.join('dotstudio/botstudio')
        .then((room) => {
            room.send('@/all 明日は燃えるゴミの日ですよ！');
        }); 
    }, () => {},true,'Asia/Tokyo');

    
}

