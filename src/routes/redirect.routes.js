const express = require('express')
const router = express.Router()
const redirectController = require('../controllers/redirect.controller')

router.get('/:shortUrl',redirectController.redirectLink)

module.exports = router