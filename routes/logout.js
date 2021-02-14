var express = require('express');
var router = express.Router();

// Logout
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;