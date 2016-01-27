'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var dbConfig = require('./secret/config-maria.json');
var bluebird = require('bluebird');


//creates like 10 connections for scaling purposes
var connPool = bluebird.promisifyAll(mysql.createPool(dbConfig));


var storiesApi = require('./controllers/stories-api');
var Story = require('./models/story.js').Model(connPool);


//create the express application
var app = express();

//log requests
app.use(morgan('dev'));

//parse JSON in the request body
app.use(bodyParser.json());

//serve static files from the /static subdirectory
app.use(express.static(__dirname + '/static'));

//mount the stories API router under /api/v1
app.use('/api/v1', storiesApi.Router(Story));


app.listen(80, function() {
	console.log('server is listening...');
});

