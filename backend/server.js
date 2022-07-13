const express = require("express");
const mongoose = require("mongoose");
const aniFoodSeed = require("./db/seed.json");
const AniFood = require("./models/seed");
const app = express();

app.get("/api", (req, res) => {
  //<------ Shows the api data as JSON, won't be accessible my user ------>//
  AniFood.find({}).then((data) => res.send(aniFoodSeed));
});

app.post("/new", (req, res) => {
  AniFood.create(req.body);
  res.redirect("/api");
});

app.listen(4000, () => console.log("Server is up and running"));
