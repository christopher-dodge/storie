const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 9001;
const path = require('path');
const api = require('./routes/api');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');

// Middleware:
/* istanbul ignore next */
process.env.NODE_ENV === 'production'
  ? app.use(morgan('common'))
  : app.use(morgan('dev'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if(err) throw err;
  console.log('MondoDB Connected!');
});

// Tell node where to serve static files from
app.use(express.static(path.join(__dirname, '../client/public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

// API routes
app.use('/api', api);

app.use(function (req, res) {
  res.status(404).send("That's a 404 folks...");
});

const server = app.listen(PORT).on('listening', () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = server; // Export for testing
