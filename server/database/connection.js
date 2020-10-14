const express           = require('express');
const _dotenv           = require('dotenv').config();
const {MongoClient}     = require('mongodb');
const URI               = process.env.DATABASEURI || 'mongodb://127.0.0.1:27017/storie';
const client            = new MongoClient(URI, {
  useUnifiedTopology: true
});

// MongoDB connection
async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
  
async function listDatabases(client) {
  databaseList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databaseList.databases.forEach(db => console.log(` - ${db.name}`));
}

module.exports = main;

// Take out the close - want open connection
// Way to send close to the server (just like sending main to server)