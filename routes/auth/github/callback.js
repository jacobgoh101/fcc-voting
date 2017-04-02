var express = require('express');
var router = express.Router();
const passport = require(__base + 'lib/auth').passport

/* GET home page. */
router.get('/', passport.authenticate('github', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('/')
});

module.exports = router;