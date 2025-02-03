// controllers/skillController.js
const express = require('express');
const fs = require('fs'); // Modul untuk membaca file
const path = require('path');
const router = express.Router(); // Menggunakan Router dari Express

// Fungsi untuk route / (halaman utama)
router.get('/', (req, res) => {
    res.render('skill/index', { title: 'Home skill', body: 'cek body', additionalJS: 'cek cek js' });
});

// Fungsi untuk route /about (halaman about)
router.get('/about', (req, res) => {
    res.render('about', { title: 'About skill' });
});

router.get('/getData', (req, res) => {
    const filePath = path.join(__dirname, '../data', 'skill.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Gagal membaca data" });
        }
        let skills = JSON.parse(data); // Ubah JSON menjadi array
        skills = skills.filter(item => item.is_active)
        // Urutkan berdasarkan field "order" secara ascending (dari kecil ke besar)
        skills.sort((a, b) => a.order - b.order);

        res.status(200).json(skills);
    });
})

// Ekspor router yang sudah berisi route
module.exports = router;