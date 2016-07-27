'use strict'

const https = require('https');

module.exports = (gitter, roomId, msgRouter) => {
    let heartbeat = ' \n';
    let options = {
        hostname: 'stream.gitter.im',
        port:     443,
        path:     '/v1/rooms/' + roomId + '/chatMessages',
        method:   'GET',
        headers:  {'Authorization': 'Bearer ' + process.env.TOKEN}
    };

    let req = https.request(options, (res) => {
        res.on('data', (chunk) => {
        let msg = chunk.toString();
        if (msg !== heartbeat) msgRouter(msg,roomId);
        });
    });

    req.on('error', (e) => {
        console.log('Something went wrong: ' + e.message);
    });

    req.end();
}