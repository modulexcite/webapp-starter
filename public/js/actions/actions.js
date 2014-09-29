var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/constants');
var Util = require('../utils/util');

var ActionTypes = Constants.ActionTypes;

/**
 * The actions defined here are the interface between the view
 * components (or router) and the dispatcher. Server actions are
 * also initiated here.
 */

module.exports = {

    showWelcome: function() {
        //Action
        var action = {"type": ActionTypes.SHOW_WELCOME};
        Dispatcher.handleViewAction(action);

        //Dependent server requests
        Util.loadName();
    },
};