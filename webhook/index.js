'use strict'

module.exports = (gitter) => {
    require('./lib/server')(webhook);

    function webhook(request) {
        console.log('-----');
        console.log(request);

        gitter.rooms.join('dotstudio/botstudio')
        .then((room) => {
            room.send('デプロイ完了。 Botが進化しました。');
        });
    }

}