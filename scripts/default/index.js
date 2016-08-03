/**
 * メッセージを受信した時にデフォルトで実行されるスクリプト
 */

'use strict'

let sendMes = require('../../lib/post_message');
let getOgp = require('./lib/get_ogp');

module.exports = (roomId,msg) => {
    if(msg.urls.length > 0){
        getOgp(msg.urls[0].url, (ogp) => {
            let sendText = `![](${ogp.image}) \n >${ogp.description}`;
            sendMes(roomId, sendText).then((body) => {console.log(body);});
        });
    }else{
        console.log('urlなし');
    }
}