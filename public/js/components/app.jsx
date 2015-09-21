import React from "react";
import ContactList from "./contactlist";
import {State} from "react-router";

import ContactsStore from "../stores/store";
import Actions from "../actions/actions";

/**
 * Private function to fetch the state needed by this component from the stores
 */
function getStateFromStores() {
    return {
        loadState: ContactsStore.loadState(),
        contactList: ContactsStore.getContactList(),
    };
}

export default React.createClass({

    // Router state
    mixins: [State],


    getInitialState() {
        return getStateFromStores();
    },

    componentDidMount() {
        ContactsStore.addChangeListener(this._onChange);

        // Actions needed as a result of loading this view
        Actions.getContactList();
    },

    componentWillUnmount() {
        ContactsStore.removeChangeListener(this._onChange);
    },

    _onChange() {
        this.setState(getStateFromStores());
    },

    render() {
        const Router = this.context.router;
        const contactId = Router.getCurrentQuery().id;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <ContactList
                            loadState={this.state.loadState}
                            contactList={this.state.contactList}
                            current={contactId}/>
                    </div>
                </div>
            </div>
        );
    }
});
