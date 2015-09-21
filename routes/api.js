var express = require("express");
var router = express.Router();

// Import our data set from above
var data = require("./data.json");

router.get("/contacts", function (req, res) {
    res.json({contacts: data});
});

module.exports = router;
