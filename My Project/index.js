'use strict';

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');

const PORT = process.env.PORT || 8000;

app.get('/index.html', function(req, res){
	res.sendFile(path.join(__dirname, '/inde.html'));
});

app.get('/cursor.png', function(req, res){
	res.sendFile(path.join(__dirname, '/cursor.png'));
});

server.listen(PORT);

var screensIO = io.of('/screens-namespace');
var controlIO = io.of('/control-namespace');
var control = null;
var confirmed = false;

controlIO.on('connection', function(socket) {
	socket.on('cursor', function(x, y) {
		screensIO.emit('cursor', x, y);
	});
	socket.on('click', function() {
		screensIO.emit('click');
	});
});