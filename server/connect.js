const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./.env" });

const db = process.env.ATLAS_URI;
const client = new MongoClient(db);

let database 

module.exports = {
  connectToServer: () => {
    database = client.db("ASMR")
  },
  getDb: () => {
    return database
  }
}