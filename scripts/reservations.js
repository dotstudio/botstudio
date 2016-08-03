'use strict'

let sendMes = require('../lib/post_message');

module.exports = (roomId,msg) => {
    let sendText = 'hey';
    sendMes(roomId, sendText).then((body) => {console.log(body);});
}