'use strict'

const Gitter = require('node-gitter');
const gitter = new Gitter(process.env.TOKEN);

// gitter.currentUser()
// .then(function(user) {
//   console.log('You are logged in as:', user.username);
//   user.rooms()
//   user.repos()
//   user.orgs()
//   user.channels()
  
// });

gitter.rooms.join('dotstudio/botstudio')
.then((room) => {
  room.send('[BOT] Hello world!');
});