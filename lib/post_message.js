'use strict'

let request = require('request');

module.exports = (roomId, text) => {

    let options = {
        uri: `https://api.gitter.im//v1/rooms/${roomId}/chatMessages`,
        form: { text: text },
        json: true,
        headers:  {'Authorization': 'Bearer ' + process.env.TOKEN}
    };

    return new Promise((resolve,reject) => {
        request.post(options, (err, res, body) => {
            if (err || res.statusCode != 200)reject(err);
            resolve(body);
        });
    });
    // core.gitter.rooms.join(core.ROOM_NAME)
    // .then((room) => {
    //     room.send('pong :facepunch:');
    // });
}