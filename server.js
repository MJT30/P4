const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const path = require("path");
const aniFoodSeed = require("./db/seed.json");
require("hbs");
const AniFood = require("./models/seed");
const Comment = require("./models/seedComments");
const methodOverride = require("method-override");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));

////////////////////////////////////////////////////////////////////////////////////////////

//Landing page.
app.get("/home", (req, res) => {
  AniFood.find({}).then((data) => res.render("anifood/landing", { data }));
});

//Takes you to page where you can add new recipe.
app.get("/newrecipe", (req, res) => {
  res.render("anifood/newrecipe");
  console.log("Adding a new post");
});

//Finds the id of content. Also sends you to the "viewrecipe" route.
app.get("/home/:id/", (req, res) => {
  AniFood.findById(req.params.id)
    .then((data) => {
      Comment.find({}).then((comments) => {
        console.log(data);
        console.log(comments);
        res.render("anifood/viewrecipe", { data, comments });
      });
    })
    .catch(console.error);
  console.log("I'm working");
});

//Post's new recipe to homepage.
app.post("/home", (req, res) => {
  console.log(req.body);
  AniFood.create(req.body);
  res.redirect("/home");
  console.log("Adding new recipe");
});

app.post("/home/:id/", (req, res) => {
  Comment.create(req.body.id);
  res.redirect("/home");
  console.log("Comment added");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Up and running on port ${port}`);
});
