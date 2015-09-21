import Dispatcher from "../dispatcher/dispatcher";
import {ActionTypes, LoadStates} from "../constants/constants";
import assign from "react/lib/Object.assign";
import {EventEmitter} from "events";

const CHANGE_EVENT = "change";

//
// Private data managed by this store is the list of contacts and the loadstate
//

let _contacts = "";
let _loadState = LoadStates.INIT;

let ContactListStore = assign({}, EventEmitter.prototype, {

    //
    // Boiler plate setup so the store can notify listeners (views) of changes
    //

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    //
    // Public API the store exposes
    //

    loadState() {
        return _loadState;
    },

    getContactList() {
        return _contacts;
    }
});

//
// Action handlers
//

ContactListStore.dispatchToken = Dispatcher.register((payload) => {
    const action = payload.action;

    switch (action.type) {

    // Handle the action
    case ActionTypes.RECEIVED_RAW_CONTACTS:
        _contacts = action.contacts;
        console.log("Store got contact", _contacts, action);
        _loadState = LoadStates.LOADED;
        ContactListStore.emitChange();
        break;

    default:
        // do nothing
    }

});

export default ContactListStore;
