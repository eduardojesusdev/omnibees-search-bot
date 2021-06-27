const express = require('express');
const router = express.Router();
const SearchController = require('../controllers/SearchController')


router.get('/', (req, res) => {
    res.send({
        message: 'Hello Asksuite World!',
        version: process.env.VERSION
    });
});

router.post('/search', SearchController.search);

//TODO implement endpoint here

module.exports = router;
