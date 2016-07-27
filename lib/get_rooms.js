'use strict'

const request = require('request');
const URL = `https://api.gitter.im/v1/rooms?access_token=${process.env.TOKEN}`;

module.exports = (cb) => {
    let rooms = [];
    request(URL, (error, res, body) => {
        if (error || res.statusCode != 200) return;
        for(let item of JSON.parse(body))rooms.push(item.id);
        cb(rooms);
    });
}