/**
 * OGP情報を取得
 */

'use strict'

const request = require('request');

module.exports = (URL, cb) => {
    request(URL, (error, res, body) => {
        if (error || res.statusCode != 200) return; 
        let header = body.split('</head>')[0];

        //画像取得
        let image = '';
        let matches = header.match(/http[s]?\:\/\/[\w\+\$\;\?\.\%\,\!\#\~\*\/\:\@\&\\\=\_\-]+/g);
        for (let item of matches){
            if(item.match(/.jpg|.png|.gif|.jpeg/)){
                image = item;
                break;
            }
        }
        console.log(image);

        //description取得
        let description = '';
        let regexp = new RegExp(`<meta name="description" content="([^<]*)`, 'g');
        description = header.match(regexp)[0].split('content="')[1].split('"')[0];
        cb({image: image,description:description});
    });
}