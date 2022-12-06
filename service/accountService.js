let express = require('express')
let router = express.Router()
let account = require('../api/accountApi')


router.get('/get', account.get)
router.get('/accounts', account.all)
router.post('/account/used', account.used)

module.exports = router