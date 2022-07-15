const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const path = require("path");
const aniFoodSeed = require("./db/seed.json");
require("hbs");
const AniFood = require("./models/seed");
const methodOverride = require("method-override");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));

////////////////////////////////////////////////////////////////////////////////////////////

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "anifood/newrecipe"));
});

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
      console.log(data);
      res.render("anifood/viewrecipe", { data });
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

//Upload route
app.post("/upload", fileUpload({ createParentPath: true }), (req, res) => {
  const files = req.files;
  console.log(files);

  return res.json({ status: "in there", message: "also in there" });
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
