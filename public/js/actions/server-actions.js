var Dispatcher = require('../dispatcher/dispatcher.js');
var Constants = require('../constants/constants.js');

var ActionTypes = Constants.ActionTypes;

/**
 * The actions defined here are for sending server responses
 * related to locations returned from the ESDB REST API
 */
module.exports = {
    
    receiveName: function(data) {
        var action = {
            type: ActionTypes.RECEIVED_RAW_NAME,
            rawName: data
        };
        Dispatcher.handleServerAction(action);
    },
};