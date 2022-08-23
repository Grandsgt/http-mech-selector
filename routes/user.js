const { USERWHITESPACABLE_TYPES } = require('@babel/types');
const express = require('express');
const { URLSearchParams } = require('url');
const router1 = express.Router();

router1.get('/', async (req, res) => {
    const findUserName = await User.findOne
})

module.exports = {router1}