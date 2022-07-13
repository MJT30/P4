const express = require("express");
const mongoose = require("mongoose");
const aniFoodSeed = require("./db/seed.json");
require("hbs");
const AniFood = require("./models/seed");
const methodOverride = require("method-override");
const app = express();
app.use(express.static("backend" + "public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");

app.use(methodOverride("_method"));

//Landing page
app.get("/home", (req, res) => {
  AniFood.find({}).then((data) => res.render("anifood/landing", { data }));
});

// app.get("/api", (req, res) => {
//   //<------ Shows the api data as JSON, won't be accessible my user ------>//
//   AniFood.find({}).then((data) => res.send(aniFoodSeed));
// });

// app.post("/new", (req, res) => {
//   AniFood.create(req.body);
//   res.redirect("/api");
// });

app.listen(4000, () => console.log("Server is up and running"));
