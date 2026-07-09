const express = require('express')
const router = express.Router()
const sendUrlController = require('../controllers/sendUrl.controller')

router.post('/shortenUrl',sendUrlController.sendUrl)

module.exports = router