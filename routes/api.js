var express = require('express');

var router = express.Router();
router.get('/workouts', function(req, res) {
	res.json({ message: 'Workout!' });	
});

module.exports = router;