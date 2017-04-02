var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let title = 'FCC Voting';
  if (req.isAuthenticated()) {
    title = "Logged In FCC Voting";
  }
  res.render('index', {
    title
  });
});

module.exports = router;