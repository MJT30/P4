const mid = (req, res, next) => {
  if (!req.files)
    return res
      .status(400)
      .json({ status: "Error", message: "Missing files my friend" });

  next();
};

module.exports = mid;
