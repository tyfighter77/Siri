var express = require('express');

var app = express();

port = 8887;

app.listen(port, function(){
  console.log('Listening on port ' + port);
});

var messages = ['Hello there, handsome.', 'I\'m sorry, I\'m ignoring you right now.', 'I can tell you how to do that'];

var getRandomMessage = function(messages){
  var randNum = Math.floor(Math.random() * ((messages.length - 1) - 0)) + 0;
  return messages[randNum];
};

app.get('/', function(req, res, next){
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: getRandomMessage(messages)
  }));
});

app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});
