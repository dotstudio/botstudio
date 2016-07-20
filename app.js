var Gitter = require('node-gitter');

var gitter = new Gitter(`TOKEN`);

// gitter.currentUser()
// .then(function(user) {
//   console.log('You are logged in as:', user.username);
//   user.rooms()
//   user.repos()
//   user.orgs()
//   user.channels()
  
// });

gitter.rooms.join('dotstudio/botstudio')
.then(function(room) {
  room.send('[BOT] Hello world!');
});