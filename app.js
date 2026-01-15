const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const RenderPages = require('./routes/pages.route');
const RecordsRoute = require('./routes/records.routes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Views
app.set('view engine', 'ejs');
app.set('views', './views');

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', RenderPages);
app.use('/records', RecordsRoute);

module.exports = app;


