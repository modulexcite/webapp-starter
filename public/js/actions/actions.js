import Dispatcher from "../dispatcher/dispatcher";
import {ActionTypes} from "../constants/constants";
import Util from "../utils/util";

/**
 * The actions defined here are the interface between the view
 * components (or router) and the dispatcher. Server actions are
 * also initiated here.
 */

module.exports = {

    getContactList() {
        // Action
        const action = {type: ActionTypes.FETCH_CONTACTS};
        Dispatcher.handleViewAction(action);

        // Dependent server requests
        Util.fetchContacts();
    },
};
