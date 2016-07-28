'use strict'

module.exports = () => {
    require('./lib/server')(webhook);

    function webhook(payload) {
        console.log('-----');
        console.log(payload);
    }
}