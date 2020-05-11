
// const path = require('path');
const express = require('express');
// const app = express();
const PORT = process.env.PORT || 5000;
const INDEX = '/public/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

// app.use(express.static(path.join(__dirname, 'public')))
// app.get('/', (req, res) => res.send('Hello World!'));
// app.listen(port, () => console.log('Listening on port: ' + port));

const { Server } = require('ws');
const wss = new Server({ server });

wss.on('connection', (ws) => {
	console.log('Client connected');
	ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
	wss.clients.forEach((client) => {
	  client.send(new Date().toTimeString());
	});
}, 1000);

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))