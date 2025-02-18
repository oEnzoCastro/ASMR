const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId

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
});
// #2 - Retrieve One
postRoutes.route("/albums/:category").get(async (req, res) => {

  let db = database.getDb();
  let data = await db.collection("albuns").find({category: req.params.category}).toArray()
  
  res.json(data);
});

// #3 - Create One

postRoutes.route("/albums").post(async (req, res) => {
  let db = database.getDb();
  let mongoObject = {
    category: "MuCore",
    artist: "Pink Floyd",
    title: "Wish You Were Here",
    cover: ""
  };

  let data = await db.collection("albuns").insertOne(mongoObject);
  res.json(data);
});

module.exports = postRoutes;
