import {Dispatcher} from "flux";
import _ from "underscore";

export default _.extend(new Dispatcher(), {

    /**
    * The details of the action, including the action's
    * type and additional data coming from the server.
    */
    handleServerAction(action) {
        this.dispatch({
            source: "SERVER_ACTION",
            action: action
        });
    },

    /**
    * The details of the action, including the action's
    * type and additional data coming from the view.
    */
    handleViewAction(action) {
        this.dispatch({
            source: "VIEW_ACTION",
            action: action
        });
    }
});
