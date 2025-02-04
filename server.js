
const express = require('express');
const path = require('path');
// const skillController = require('./controllers/skillController');
// const portfolioController = require('./controllers/portfolioController');
// const educationController = require('./controllers/educationController');
const app = express();
const port = 5000;

// Set view engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Middleware untuk file statis (CSS, JS, gambar)
app.use(express.static('public'));

// // Routing
app.get('/', (req, res) => {
    console.log('hallo')
    res.send('hallo');
});

// app.get('/about', (req, res) => {
//     res.render('about', { title: 'About' });
// });
// app.use('/skill', skillController);
// app.use('/portfolio', portfolioController);
// app.use('/education', educationController);
// console.log('cek')
// Jalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
