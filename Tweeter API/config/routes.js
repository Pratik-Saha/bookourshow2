const express = require('express')
const router = express()

const tweetontroller = require('../app/controllers/tweetCotroller')

router.get('/tweets', tweetontroller.list)
    

module.exports = router
