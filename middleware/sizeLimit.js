const MB = 5; //This is the file size limit. May change later.
const FILE_SIZE = MB * 1024 * 1024; //These 2 values combined make 5 MB8

const sizeLimit = (req, res, next) => {
  const files = req.files;

  const overLimit = [];

  Object.keys(files).forEach((key) => {
    if (files[key].size > FILE_SIZE) {
      overLimit.push(files[key].name);
    }
  });

  if (overLimit.length) {
  }

  next();
};

module.exports = sizeLimit;
