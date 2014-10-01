var express = require('express');

var router = express.Router();
router.get('/name', function(req, res) {
	res.json({ message: 'ESnet' });
});

module.exports = router;