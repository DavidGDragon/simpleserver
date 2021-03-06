'use strict';
var express = require('express');
var app = express();
var app2 = express();

console.log('starting');

app.get('/', function (req, res) {
  console.log('got a request');
  var out = process.env.FOO;
  var tag = process.env.BUILD_NUMBER || 'no tag found';
  var response = '<html><h2>FOO=' + out + '</h2><h3>' +
    'tag:' + tag + '</h3></html>';

  res.send(response);
});

app.get('/tag', function (req, res) {
  console.log('got a tag request');
  var tag = process.env.BUILD_NUMBER || 'no build in environment';
  res.send(tag);
});

app2.get('/', function (req, res) {
  var message = 'admin use only';
  res.send(message);
});

var port = process.env.PORT || 8888;
console.log('Listening on port: ' + port);
app.listen(port);


var adminPort = process.env.ADMIN_PORT || 12345;
console.log('Listening on port: ' + adminPort);
app2.listen(adminPort);
