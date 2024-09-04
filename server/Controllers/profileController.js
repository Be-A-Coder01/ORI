let fetchprofile = (req, res, next) => {
  const store = req.user;
  res.status(201).json({ store });
};

module.exports = fetchprofile;
