import React from "react";

/**
 * Render a single contact
 */
export default React.createClass({

    render() {
        if (this.props.contact) {
            const contact =
                `${this.props.contact.name} is ${this.props.contact.age} old.`;

            return (
                <div>
                    <span>
                        <h3 ref="title">{this.props.contact.name}</h3>
                    </span>
                    <span ref="description">
                        {contact}
                    </span>
                </div>
            );
        } else {
            return (
                <div>
                    No contact selected
                </div>
            );
        }
    }
});
