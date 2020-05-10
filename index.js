
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log('Listening on port: ' + port));

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))