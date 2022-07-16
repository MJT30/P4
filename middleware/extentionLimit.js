const path = require("path");

const extentionLimit = (longArray) => {
  return (req, res, next) => {
    const files = req.files;

    const extentions = [];
    Object.keys(files).forEach((key) => {
      extentions.push(path.extname(files[key].name));
    });
    const justStuff = extentions.every((ext) => longArray.includes(ext));

    if (!justStuff) {
    }
    next();
  };
};

module.exports = extentionLimit;
