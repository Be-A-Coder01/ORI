const detail = async (req, res) => {
  const detail = await req.user;
  res.status(201).send(detail.like);
};

module.exports = detail;
