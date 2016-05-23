"use strict"

var express = require('express');
var app = express();
var port = 3000;



var midi = require('midi');
var output = new midi.output();

// Count the available output ports.
output.getPortCount();

// Get the name of a specified output port.
output.getPortName(0);

// Open the first available output port.
output.openPort(0);

// TODO: Close the port when done.
//output.closePort();

var helpText = "<h1>Welcome to web-midi</h1>"+
"use /...";

// host files in public directory statically!
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(helpText);
});

app.get('/raw', (req, res) => {
  console.log('processing raw request');

  // Send a MIDI message.
  if (req.query.a != null) {
    output.sendMessage([req.query.a, req.query.b, req.query.c]);
  } else {
    output.sendMessage(req.query.params);
  }

  res.send('done');
});

app.listen(port, () => {
  console.log("Listening on port", port);
});



