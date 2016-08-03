'use strict'

let sendMes = require('../../lib/post_message');

module.exports = (roomId,msg) => {
    let sendText = 'pong :facepunch: ';
    sendMes(roomId, sendText).then((body) => {console.log(body);});
}