const express = require('express');

const router = express.Router()

router.get('/users', (req, res) => {
    console.log('users table');
})

module.exports = router;