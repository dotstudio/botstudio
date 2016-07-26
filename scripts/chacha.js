'use strict'

module.exports = (core) => {
    core.gitter.rooms.join(core.ROOM_NAME)
    .then((room) => {
        //コマンドが送られてきたら処理を書くところ
        room.send('ちゃちゃまる');
    });
}
