//------------------------------------------------------------------------------------

// LIBRARIES

//------------------------------------------------------------------------------------



const express = require('express');
const pug = require('pug');
const fs = require('fs');
var WebSocketServer = require('websocket').server;




//------------------------------------------------------------------------------------

// HELPER FUNCTIONS

//------------------------------------------------------------------------------------







//------------------------------------------------------------------------------------

// SERVER CODE

//------------------------------------------------------------------------------------



var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static('public'))


//------------------------------------------------------------------------------------


app.listen(3000, () => {
	console.log('server started on port 3000');
});


//------------------------------------------------------------------------------------


// load mainpage
app.get('/', (req, res) => {
	res.render('test.pug');
});


app.get('/iconpack/:type/:iconname', (req, res) => {
	var data = fs.readFileSync('GamePack/Icons/' + req.params.type + '/' + req.params.iconname);

	console.log('sending:');
	console.log(data);

	res.set('Content-Type', 'image/png');
	res.send(data);
});


app.post('/gamepack/:type', (req, res) => {
	console.log('User requesting file: ' + req.params.type + '.json');
	var data = fs.readFileSync('GamePack/' + req.params.type + '.json').toString();

	if(data == false) {
		console.log('file: ' + req.params.type + '.json' + ' not valid');
		res.json({});
	}

	else {
		console.log('Nothing sketchy going on here... All good to go');
		res.json(JSON.parse(data));
	}
});

//------------------------------------------------------------------------------------



/*var websocketTest = new WebSocketServer({
	httpServer: app,
	autoAcceptConnections: false
});

function allowConnection(origin) {

	// if origin isn't allowed return false

	return true;
}

websocketTest.on('request', (request) => {

});*/



//------------------------------------------------------------------------------------





