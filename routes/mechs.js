const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('successful GET request made!')
})

module.exports = {router}