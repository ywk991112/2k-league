const express = require('express');
const path = require('path');
const logger = require('morgan');
const api = require('./api');
const bodyParser = require('body-parser');
const app = express();


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '..', 'dist')));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', api);

app.post('/api/gamedata',function(req,res){
  var gameList = req.body;
  //console.log(gameDatas);
  //console.log(typeof(gameDatas));
  var json2csv = require('json2csv');
  var fields = ['no', 'hName', 'gName', 'hScore', 'gScore'];
  var fs = require('fs');
  var path = require('path');
  var filePath = path.join(__dirname, 'games.csv');
  var opts = {
    data: gameList,
    fields: fields,
    quotes: ''
  };
  json2csv(opts,function(err, csv){
    if(err)console.log(err);
    //console.log(csv);
    fs.writeFile(filePath,csv,function(err){
      if(err)throw err;
      console.log('file saved');
    });
  });
  //req.end();
  res.sendStatus(200);
});

// app.use('*', (req, res) => {
  // res.sendFile(path.join(__dirname, '../src/', 'index.html'));
// });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});


module.exports = app;
