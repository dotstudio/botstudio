'use strict'

const Gitter = require('node-gitter');
const gitter = new Gitter(process.env.TOKEN);
const util = require('util');

const ROOM_NAME = 'dotstudio/botstudio'; //todo 複数指定したい
const connect_rooms = require('./lib/connect_rooms'); //roomへの接続

//todo 複数読み込みしたい
const COMMANDS = {
    ping: require('./scripts/ping')
};

//ルーティング
function msgRouter(msg){
  console.log('Message: ' + msg);
  let core = {msg: JSON.parse(msg),gitter: gitter, ROOM_NAME: ROOM_NAME};
  if(!util.isObject(core.msg.mentions[0])) return;
  let command_name = core.msg.text.split(' ')[1];
  if(command_name !== '') COMMANDS[command_name](core);
}

connect_rooms(gitter, ROOM_NAME, msgRouter);