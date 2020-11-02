const express           = require('express');
const morgan            = require('morgan');
const PORT              = process.env.PORT || 9001;
const path              = require('path');
const api               = require('./routes/api');
const connectToDatabase = require('./database/connection');
const db                = require('./models');
const app               = express();

async function startServer() {
  // Database connection, will be true or false
  const dbConnected = await connectToDatabase();
  console.log('\ndbConnected: ' + dbConnected);

  // Middleware:
  /* istanbul ignore next */
  process.env.NODE_ENV === 'production'
    ? app.use(morgan('common'))
    : app.use(morgan('dev'));

  // Tell node where to serve static files from
  app.use(express.static(path.join(__dirname, '../client/public')));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  });

  // API routes
  app.use('/api', api);

  app.use(function (req, res) {
    res.status(404).send("That's a 404 folks...");
  });

  // If db is not connected, server will not listen
  let server;
  if (dbConnected) {
    server = app.listen(PORT).on('listening', () => {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  } else {
    console.log('No db connection!');
  }
  return server;
}

const server = startServer();

module.exports = server; // Export for testing