var mqtt    = require('mqtt');
var mysql      = require('mysql');

var value;
var convertedValue;

var PORT = 10000;
var HOST = 'dev.e-mozart.com';
var server = {port:PORT, host:HOST};

var client = mqtt.connect(server);


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Beehive123',
  database : 'beehive'
});

connection.connect(function(err){
  if(!err) {
    console.log("Database is connected ... \n\n");
  } else {
    console.log("Error connecting database ... \n\n");
  }
});

client.on('connect', function () {
  client.subscribe('technetium/test/parking');

});

client.on('message', function (topic, message) {
  // message is Buffer
console.log(message);

  //SAVE value to DB
  /*
  connection.query('INSERT INTO temperatureTest ( measure ) VALUES (' + convertedValue.toString() + ') ', function(err, rows, fields) {
    if (!err)
      console.log('The solution is: ', rows);
      else
        console.log('Error while performing Query.');
      });*/

    });
