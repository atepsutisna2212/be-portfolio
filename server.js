const express = require('express');
const path = require('path');
const app = express();

// Set view engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Middleware untuk file statis (CSS, JS, gambar)
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('hallo');
    res.send('hallo');
});

// Ekspor app untuk Vercel
module.exports = app;