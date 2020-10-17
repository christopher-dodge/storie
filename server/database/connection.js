const express           = require('express');
const _dotenv           = require('dotenv').config();
const {MongoClient}     = require('mongodb');
const URI               = getConnectionURI();
const client            = new MongoClient(URI, {
  useUnifiedTopology: true
});

function getConnectionURI() {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") {
    return 'mongodb://127.0.0.1:27017/storie';
  }
  if (process.env.NODE_ENV === "production") {
    return process.env.DATABASEURI;
  }
}

// MongoDB connection
async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    console.log(`Connected to ${URI}`);

    // Make the appropriate DB calls
    // await listDatabases(client);

  } catch (e) {
    console.error(e);
  }
}
  
// async function listDatabases(client) {
//   databaseList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databaseList.databases.forEach(db => console.log(` - ${db.name}`));
// }

module.exports = main;

// Way to send close to the server (just like sending main to server) - research, also for testing
