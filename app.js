'use strict'

const Gitter = require('node-gitter');
const gitter = new Gitter(process.env.TOKEN);
const util = require('util');

const BOT_NAME = 'dotstud-io'; //bot名
const get_rooms = require('./lib/get_rooms'); //roomのid一覧を取得
const connect_rooms = require('./lib/connect_rooms'); //roomへの接続

//todo 複数読み込みしたい
const COMMANDS = {
    default: require('./scripts/default'),
    ping: require('./scripts/ping'),
    chacha: require('./scripts/chacha')
};

//すべてのRoomに接続
get_rooms((room_ids) => {
  for(let roomid of room_ids) connect_rooms(gitter, roomid, msgRouter);
});

//ルーティング
function msgRouter(msg, roomId){
  let msgData = JSON.parse(msg);
  let tmp = msgData.text.split(' ');
  if(msgData.fromUser.username === BOT_NAME) return; //自分の発言には反応しない

  if(tmp[0] === `@${BOT_NAME}`){//botへのリプの場合
      let command_name = tmp[1]; //コマンド名を取得`@bot ping`ならping
      if(COMMANDS[command_name])COMMANDS[command_name](roomId,msgData);  
  }else{//それ以外
    COMMANDS['default'](roomId,msgData);
  }
}