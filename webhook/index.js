'use strict'

module.exports = (gitter) => {
    require('./lib/server')(webhook);

    function webhook(request) {
        console.log('-----');
        console.log(request);

        gitter.rooms.join('n0bisuke')
        .then((room) => {
            room.send('testtest');
        });
    }
}