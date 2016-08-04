'use strict'

//自身を再起動
const pm2 = require('pm2');
const pm2name = 'dsbot';

module.exports = () => {
    pm2.connect((err) => {
        if (err) {
            console.error(err);
            process.exit(2);
        }
        console.log('再起動するよ!\n');
        pm2.restart({name: pm2name, watch:false}, (err, apps) => {
            pm2.disconnect();   // Disconnect from PM2
            if (err) throw err;
            // console.log(apps);
        });
        
    });
}