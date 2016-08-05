'use strict'

if(!process.env.GOOGLEAPI_ID){
    console.log(`GOOGLEAPI_ID=xxxxx node app.js などで起動してください。`)
    return;
}

const gaAnalytics = require("ga-analytics");
const CLIENT_ID = process.env.GOOGLEAPI_ID;
const SERVICE_ACCOUNT_EMAIL = 'dotstduio-ga@nodejs-test-1318.iam.gserviceaccount.com';
const SERVICE_ACCOUNT_KEY_FILE = '/home/n0bisuke/dotstudio/botstudio/key.pem';
const VIEW_ID = 122411513;
const METRICS = 'pageviews'; 

gaAnalytics({
  metrics: `ga:${METRICS}`,
  clientId: CLIENT_ID,
  serviceEmail: SERVICE_ACCOUNT_EMAIL,
  key: SERVICE_ACCOUNT_KEY_FILE,
  ids: `ga:${VIEW_ID}`
}, (err, res) => { 
  if(err) throw err;
  console.log(res.totalsForAllResults);
});