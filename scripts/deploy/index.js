'use strict'

//@dotstud-io deploy now
const sendMes = require('../../lib/post_message');
const deploy = require('../../commons/deploy'); //deploy

module.exports = (roomId,msg) => {
    let sendText = '';
    let sendUser = msg.fromUser.username;
    let tmp = msg.text.split(' ');
    // console.log(tmp);
    if(sendUser !== 'n0bisuke'){
        sendText += `君には${tmp[1]}権限がないよ`;
        sendMes(roomId, mes).then((body) => {console.log(body);});
        return;
    }

    let subCmd = tmp[2];
    if(subCmd === 'now'){
        _deploy((mes)=>{
            sendMes(roomId, mes).then((body) => {console.log(body);});
        });
    }
    
    // else if(subCmd === 'list'){
    //     // sendText = list();
    // }else if(subCmd === 'block'){
    //     //sendText = changeBlock('on');
    // }else if(subCmd === 'unblock'){
    //     //sendText = changeBlock('off');
    // }else{
    //     // sendText = 'ハハッ';
    // }

}

function _deploy(cb){
    console.log('即時デプロイスタート..');
    let command = 'cd web-test && git pull origin master && git push special master';
    deploy(command, (mes)=>{
        console.log(mes);
        cb(mes);
    })
}