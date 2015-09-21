import Dispatcher from "../dispatcher/dispatcher";
import {ActionTypes} from "../constants/constants";

/**
 * The actions defined here are for sending server responses.
 */

module.exports = {

    receiveName(data) {
        const action = {
            type: ActionTypes.RECEIVED_RAW_CONTACTS,
            contacts: data
        };
        Dispatcher.handleServerAction(action);
    },
};
