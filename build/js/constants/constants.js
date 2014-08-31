var keyMirror = require('react/lib/keyMirror');

module.exports = {

    ActionTypes: keyMirror({
        //View action
        SHOW_WELCOME: null,

        //Server action from response
        RECEIVED_RAW_NAME: null,
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    }),

    LoadStates: keyMirror({
        INIT: null,
        LOADING: null,
        LOADED: null,
    }),

};