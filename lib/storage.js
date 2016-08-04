'use strict'

const fs = require('fs');
const FILE = './data.json';

// init();
// addReservations('8/2 08:00に予約');
// removeReservations(0);

// updateBlock('off');

module.exports = {
    init: init,
    checkBlock: checkBlock,
    updateBlock: updateBlock,
    addReservations: addReservations,
    removeReservations: removeReservations,
    listReservations: listReservations,
    setSchedule: setSchedule,
    readSchedule: readSchedule
}

//初期化 ファイルが無い場合
function init() {
    let origindata = {
        block: 'off',
        reservations: []
    };
    let data = JSON.stringify(origindata);
    fs.readFile(FILE, 'utf8', (err, text) => {
        if(!err)return;
        fs.writeFile(FILE, data , (err) => {
            if(err) return;
            console.log('init!');
        });
    });
}

//on or off
function checkBlock() {
    let data = _read();
    return data.block;
}

function updateBlock(flag) {
    let data = _read();
    data.block = flag;
    _save(data);    
}

function listReservations(params) {
    let data = _read();
    return data.reservations.toString();
}

function addReservations(reservation) {
    let data = _read();
    data.reservations.push(reservation);
    _save(data);
}

function removeReservations(target_num) {
    let data = _read();
    data.reservations.splice(target_num, 1);
    _save(data);
}

function setSchedule(plan) {
    let data = _read();
    data.reservation_schedule = plan;
    _save(data);
}

function readSchedule(key){
    let data = _read();
    return data[key];
}

function _save(data) {
    let str = JSON.stringify(data);
    fs.writeFileSync(FILE,str);
    console.log(str);
}

function _read() {
    let contents = fs.readFileSync(FILE).toString();
    return JSON.parse(contents);
}