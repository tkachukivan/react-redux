const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const nConf = require('./config/n-conf_init.js');

// controllers

const { getBooks } = require('./controllers/books');
const { updateBook, getBook } = require('./controllers/book');
const { buy } = require('./controllers/buy');

const app = express();

let databaseUrl = nConf.get('database_url');
databaseUrl = databaseUrl.replace('<dbuser>', nConf.get('database_user')).replace('<dbpassword>', nConf.get('database_password'));

mongoose.Promise = Promise;

mongoose.connect(databaseUrl);

app.use('/', express.static(path.join(__dirname, './../dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/api/books', getBooks);
app.put('/api/book/:id', updateBook);
app.get('/api/book/:id', getBook);
app.post('/api/buy', buy);

exports.app = app;
