'use strict'

module.exports = (core) => {
    core.gitter.rooms.join(core.ROOM_NAME)
    .then((room) => {
        room.send('pong :facepunch:');
    });
}