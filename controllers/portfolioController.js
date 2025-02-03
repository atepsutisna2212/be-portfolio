const express = require('express');
const router = express.Router(); // Menggunakan Router dari Express

router.get('/', (req, res) => {
    res.render('index', { title: 'portfolio' });
});

module.exports = router;