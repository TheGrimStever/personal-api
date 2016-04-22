module.exports = function (req, res, next) {
  console.log('Request time: ', new Date());
  console.log(req.params);
  console.log('----------------------------');

  next();
}
