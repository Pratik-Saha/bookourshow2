const express = require('express')
const app = express()
const PORT = 3000

const routes = require('./config/routes')
const setupDB = require('./config/database')

app.use(express.json())
app.use('/', routes)

//configuare dB
setupDB()

app.listen(PORT, () => {
    console.log('listening to port ', PORT)
})
