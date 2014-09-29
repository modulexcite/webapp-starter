var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/constants');

var EventEmitter = require('events').EventEmitter;
var Merge = require('react/lib/merge');

var ActionTypes = Constants.ActionTypes;
var LoadStates = Constants.LoadStates;

var CHANGE_EVENT = 'change';

//
// Private data managed by this store is the name and the loadstate
// 

var _name = "";
var _loadState = LoadStates.INIT;

var NameStore = Merge(EventEmitter.prototype, {

    //
    // Boiler plate setup so the store can notify listeners (views) of changes
    //

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    //
    // Public API the store exposes
    //
    
    loadState: function() {
        return _loadState;
    },

    getName: function() {
        return _name;
    },  
});

//
// Action handlers
//

NameStore.dispatchToken = Dispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {

        //Handle the action
        case ActionTypes.RECEIVED_RAW_NAME:
            _name = action.rawName;
            _loadState = LoadStates.LOADED;
            NameStore.emitChange();
            break;

      default:
        // do nothing
    }

});

module.exports = NameStore;