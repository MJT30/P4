const AniFood = require("../models/seed");
const aniFoodSeed = require("./seed.json");

AniFood.deleteMany({})
  .then(() => {
    return AniFood.insertMany(aniFoodSeed);
  })
  .then(console.log)
  .catch(console.log(console.error))
  .finally(() => {
    process.exit();
  });

console.log(aniFoodSeed);
