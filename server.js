const express = require('express');
const path = require('path');
const cors = require("cors");
const skillController = require('./controllers/skillController');
const portfolioController = require('./controllers/portfolioController');
const educationController = require('./controllers/educationController');
const app = express();

// Set view engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Middleware untuk file statis (CSS, JS, gambar)
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
// app.use(express.static('public'));

// // Routing
app.get('/', (req, res) => {
    console.log('hallo')
    res.send('hallo');
});

// app.get('/about', (req, res) => {
//     res.render('about', { title: 'About' });
// });
app.use('/skill', skillController);
app.use('/portfolio', portfolioController);
app.use('/education', educationController);

// Ekspor app untuk Vercel
module.exports = app;