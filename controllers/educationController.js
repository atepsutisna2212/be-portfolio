const express = require('express');
const router = express.Router(); // Menggunakan Router dari Express

// Fungsi untuk route / (halaman utama)
router.get('/', (req, res) => {
    res.render('index', { title: 'Home education' });
});

// Fungsi untuk route /about (halaman about)
router.get('/about', (req, res) => {
    res.render('about', { title: 'About education' });
});

// Ekspor router yang sudah berisi route
module.exports = router;