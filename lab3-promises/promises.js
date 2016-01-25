'use strict';

var promise = new Promise(function(resolve, reject) {
  resolve(1);
});

promise.then(function(val) {
  console.log(val); // 1
  return val + 1;
})
.then(function(val) {
  console.log(val); // 2
  return val + 1;
})
.then(function(val) {
  console.log(val); // 3
});
/*
var http = require('http');

function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual request stuff
    http.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            resolve(body);
        });
    }).on('error', function(err) {
        reject(err);
    });
  });
}
*/


/*
Now that we have this method, let's use it for something really simple. Let's query the OMDb API (yip, this again :D). Write a function called getMovie(movieId) which calls the OMDb api for the movie with the given id. Print out the parsed JSON results to the console. Make sure to catch any errors with a .catch() statement.

Example API call: get("http://www.omdbapi.com/?i=tt0120737&plot=short&r=json")
*/

function getMovie(movieId){
	
}