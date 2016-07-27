'use strict'

const Gitter = require('node-gitter');
const gitter = new Gitter(process.env.TOKEN);
const util = require('util');

const BOT_NAME = 'dotstud-io'; //bot名
const get_rooms = require('./lib/get_rooms');
const connect_rooms = require('./lib/connect_rooms'); //roomへの接続

//todo 複数読み込みしたい
const COMMANDS = {
    ping: require('./scripts/ping'),
    chacha: require('./scripts/chacha')
};

//ルーティング
function msgRouter(msg, roomId){
  // console.log('Message: ' + msg);
  let msgData = JSON.parse(msg);
  if(!util.isObject(msgData.mentions[0])) return; // リプライがなかったらスルー
  if(msgData.mentions[0].screenName !== BOT_NAME) return; //ボット名に対してのリプじゃなかったらスルー
  let command_name = msgData.text.split(' ')[1];
  if(command_name !== '') COMMANDS[command_name](roomId,msgData);
}

//すべてのRoomに接続
get_rooms((room_ids)=>{
  for(let roomid of room_ids) connect_rooms(gitter, roomid, msgRouter);
});

