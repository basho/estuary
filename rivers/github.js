// Code using https://github.com/pksunkara/octonode
var github = require('octonode');
var client = github.client('a4c13f0b9abc0c89a5547caa255f015e46fef40e');
var ghme   = client.me();
var ghorg = client.org('basho');

// client.get('/user', function (err, status, body) {
//   console.log(body); //json object
// });

ghme.info(function(err, status, body){
	console.log(status);
});

ghorg.info(function(err, data){
	console.log(data);
});

console.log(ghorg);