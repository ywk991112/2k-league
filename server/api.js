const Router = require('express').Router;
const router = new Router();
var fs = require('fs');
var path = require('path');
var csv = require('csv-parser');

router.get('/getgamedata',function(req, res){
  var filePath = path.join(__dirname, 'games.csv');
  var stream = csv({
    raw: false,
    seperator: ',',
    quote: '"',
    escape: '"',
    newline: '\n',
    strict: false
  });
  var games = [];
  var countGames = 0;
  fs.createReadStream(filePath)
    .pipe(stream)
    .on('data', function(data) {
      console.log(data);
      games.push(data);
      console.log(games[countGames].name);
      console.log(games[countGames].testTime);
      if(games[countGames].number === 
         games[countGames].total){
        console.log(games);
      }
      countGames ++;
    })
    .on('end', () => {
      res.json(games);
    });
})

router.get('/users/:username', function(req, res){
  var found = false;
  for(var i = 0; i < UserProfile.users.length; i++){
    if(req.params.username == UserProfile.users[i].name){
      found = true;
      res.json(UserProfile.users[i]);
      break;
    }
  }
  if(found == false){
    res.sendStatus(404);
  }
})

module.exports = router;
