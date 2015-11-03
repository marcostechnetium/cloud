var mqtt    = require('mqtt');
//var client  = mqtt.connect('mqtt://localhost');
var value;
var convertedValue;

var PORT = 10000;
var HOST = 'dev.e-mozart.com';
var server = {port:PORT, host:HOST};

var client = mqtt.connect(server);

client.on('connect', function () {
  client.subscribe('technetium/sensing/temperature/bedroom');
  //client.publish('presence', 'Hello mqtt');
});

client.on('message', function (topic, message) {
  // message is Buffer
  value = parseFloat(message);
  convertedValue = (value - 500) / 10;
  console.log(convertedValue.toString(),' - ',new Date().toString());
  console.log('INSERT INTO temperatureTest( measure ) VALUES (' + convertedValue.toString() + ') ');
  //client.end();
});
