// const {MongoClient}     = require('mongodb');
const mongoose          = require('mongoose');
const URI               = getConnectionURI();
// const client            = new MongoClient(URI, {
//   useUnifiedTopology: true
// });

function getConnectionURI() {
  console.log(process.env.NODE_ENV);
  // Check for staging
  if (process.env.NODE_ENV === "development") {
    return 'mongodb://127.0.0.1:27017/dev_storie';
  }
  if (process.env.NODE_ENV === "production") {
    return process.env.DATABASEURI;
  }
}

// MongoDB connection
async function connectToMongoClient() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    // Connect to the MongoDB cluster
    // await client.connect();

    console.log(`Connected to ${URI}`);

    // Make the appropriate DB calls
    // await listDatabases(client);
    return Promise.resolve(true);

  } catch (e) {
    console.error(e);
    return Promise.reject(false);
  }
}

module.exports = connectToMongoClient;

// Way to send close to the server (just like sending connectToMongoClient to server) - research, also for testing
