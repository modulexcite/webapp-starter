import React from "react";
import _ from "underscore";
import {Link} from "react-router";

import {LoadStates} from "../constants/constants";
import Contact from "./contact";

/**
 * Render a list of contacts
 */
export default React.createClass({

    /**
     * Render the message Hello world and the name
     */
    render() {
        const isLoaded = this.props.loadState === LoadStates.LOADED;
        const dependenciesLoaded = true;
        const renderView = dependenciesLoaded && isLoaded;
        const bodyStyle = {
            height: 200,
            borderLeft: "solid",
            backgroundColor: "#F9F9F9",
            padding: 10
        };

        // Build list of links for each contact
        let contactElements = _.map(this.props.contactList, (contact) => {
            return (
                <div className="row" refCollection="contacts">
                    <div className="col-md-3">
                        <span style={{fontSize: 26}}>
                            <Link
                                to="contacts"
                                activeClassName="active"
                                query={{id: contact.id}}>
                                {contact.name}
                            </Link>
                        </span>
                    </div>
                </div>
            );
        });

        // If we're ready to render, then render a list of contacts
        // next to details for the current contact
        if (renderView) {
            const current = this.props.current ?
                this.props.contactList[this.props.current] : null;
            return (
                <div className="row">
                    <div className="col-md-3">
                        {contactElements}
                    </div>
                    <div className="col-md-9" style={bodyStyle}>
                        <Contact contact={current} />
                    </div>
                </div>
            );
        } else {
            return (
                <span>
                    Loading...
                </span>
            );
        }
    }
});
