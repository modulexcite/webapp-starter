
var director = require('director');
var ActionCreators = require("../actions/actions");

var routes = {

    "hello": function() {
        ActionCreators.showWelcome();
    },

};

var router = new director.Router(routes);
router.init('/hello'); //apparently this is necessary

module.exports = router;