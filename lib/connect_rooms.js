'use strict'

const https = require('https');

module.exports = (gitter, ROOM_NAME, msgRouter) => {

    gitter.rooms.join(ROOM_NAME)
    .then((room) => {
        let heartbeat = ' \n';
        let options = {
            hostname: 'stream.gitter.im',
            port:     443,
            path:     '/v1/rooms/' + room.id + '/chatMessages',
            method:   'GET',
            headers:  {'Authorization': 'Bearer ' + room.client.token}
        };

        let req = https.request(options, (res) => {
            res.on('data', (chunk) => {
            let msg = chunk.toString();
            if (msg !== heartbeat) msgRouter(msg);
            });
        });

        req.on('error', (e) => {
            console.log('Something went wrong: ' + e.message);
        });

        req.end();
    });

    return gitter;
}