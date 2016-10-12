var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var Click = require('./db/swanson.js');


var app = express()

var port = process.env.PORT || 8080;

app.use(express.static(__dirname));
app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/api/click', function(req, res){
  console.log("HAHAH!")
  Click.find().exec( function(data){
    console.log("stuff")
    console.log(data);
    data.counter++;
    data.save();
    res.status(200).send(data.counter);
  })
})

app.listen(port);
