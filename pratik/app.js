const express = require('express');
const app = express();
const student = require('./student');
const warden = require('./warden');
const ejs = require('ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use('/api/student',student);
app.use('/api/warden',warden);

app.listen(8000, function () {
    console.log('listening to port no 3000');
});
