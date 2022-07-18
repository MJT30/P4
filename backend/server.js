const express = require("express");
const cors = require("cors");
// const aniFoodSeed = require("./db/seed.json");
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

//Landing page.
app.get("/home", (req, res) => {
  AniFood.find({})
    .then((data) => res.send(data))
    .catch(console.error);
});

// //Takes you to page where you can add new recipe.
// app.get("/newrecipe", (req, res) => {
//   res.render("anifood/newrecipe");
//   console.log("Adding a new post");
// });

//Finds the id of content. Also sends you to the "viewrecipe" route.
app.get("/home/:id/", (req, res) => {
  AniFood.findById(req.params.id)
    .then((data) => res.send(data))
    .catch(console.error);
});

//Post's new recipe to homepage.
app.post("/home", (req, res) => {
  AniFood.create(req.body).then(res.send("Data Added")).catch(console.error);
});

app.get("/search", (req, res) => {
  AniFood.find(req.query)
    .then((data) => res.send(data))
    .catch(console.error);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Up and running on port ${port}`);
});
