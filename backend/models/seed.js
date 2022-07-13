const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: { type: String, required: true },
  anime: { type: String, required: true },
  dish: { type: String, required: true },
  rl_image: { type: String, required: true },
  anime_image: { type: String, required: true },
  recipe: { type: String, required: true },
});

const AniFood = mongoose.model("AniFood", foodSchema);

module.exports = AniFood;
