'use strict'

//@dotstud-io reservations add 006_8/2_08:00

const sendMes = require('../../lib/post_message');
const DB = require('../../lib/storage'); //ストレージ
DB.init();

module.exports = (roomId,msg) => {
    let sendText = '';
    let sendUser = msg.fromUser.username;
    let tmp = msg.text.split(' ');
    console.log(tmp);
    if(sendUser !== 'n0bisuke'){
        sendText += `君には${tmp[1]}権限がないよ`;
    }

    let subCmd = tmp[2];
    if(subCmd === 'add'){
        sendText += add(tmp[3]);
    }else if(subCmd === 'list'){
        sendText += list();
    }else{
        sendText += 'ハハッ';
    }

    // sendMes(roomId, sendText).then((body) => {console.log(body);});
}

//予約する
function add(options) {
   let tmp = options.split('_');
   let postId = tmp[0];
   let date = tmp[1];
   let time = tmp[2];
   let mes = `${postId}を${date}の${time}に予約しました。`;
   DB.addReservations(mes);
   return mes;
}

//予約を表示
function list() {
    let mes = '予約一覧\n';
    mes += DB.listReservations();
    console.log(mes);
    return mes;
}