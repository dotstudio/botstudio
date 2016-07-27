'use strict'

let sendMes = require('../lib/post_message');

module.exports = (roomId) => {
    let sendText = 'ping :facepunch: ';
    sendMes(roomId, sendText).then((body) => {
        console.log(body);
    });
}