module.exports = function(req, res, next) {
  res.contentType = "json";
  res.send({ message: "hello DevOps!" });
  next();
};
