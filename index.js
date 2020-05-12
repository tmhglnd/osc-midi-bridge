'use strict';

const express = require('express');
const socket = require('socket.io');

const PORT = process.env.PORT || 5000;
const INDEX = '/public/index.html';

let server = express()
.use((req, res) => res.sendFile(INDEX, { root: __dirname }))
.listen(PORT, () => console.log('Listening on port: ' + PORT));

const io = socket(server);

io.on('connection', (socket) => {
	socket.on('user', (user) => {
		console.log('new user:', user, socket.id);
	})
	
	socket.on('disconnect', () => {
		console.log('user disconnected:', socket.id);
	});

	socket.on('message', (msg) => {
		console.log('received:', msg);
		io.emit('message', msg);
	});
});

// setInterval(() => {
// 	io.broadcast.emit("/fromServer", "test...");
// }, 250)