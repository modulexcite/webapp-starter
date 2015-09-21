import keyMirror from "react/lib/keyMirror";

module.exports = {

    ActionTypes: keyMirror({
        // View action
        FETCH_CONTACTS: null,

        // Server action from response
        RECEIVED_RAW_CONTACTS: null,
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
