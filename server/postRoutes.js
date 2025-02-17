const express = require("express");
const database = require("./connect");

let postRoutes = express.Router();

// Members
// #1 - Retrieve All

postRoutes.route("/members").get(async (req, res) => {
  let db = database.getDb();
  let data = await db.collection("members").find({}).toArray();
  res.json(data);
});

// Albuns
// #1 - Retrieve All
postRoutes.route("/albums").get(async (req, res) => {
  let db = database.getDb();
  let data = await db.collection("albuns").find({}).toArray();
  res.json(data);
})

module.exports = postRoutes;
