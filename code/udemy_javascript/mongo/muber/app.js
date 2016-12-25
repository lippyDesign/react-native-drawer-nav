const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost/muber');
}

// body parse middleware before router
app.use(bodyParser.json());
routes(app);
// error handling middleware after router
// next calls the next middleware
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

module.exports = app;