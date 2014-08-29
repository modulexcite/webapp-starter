/** @jsx React.DOM */

var React = require("react");

console.log("Loading....");

var HelloMessage = React.createClass({
    render: function() {
        console.log("Rendering");
        return <div>Hello world {this.props.name}</div>;
    }
});

// Exports
module.exports.HelloMessage = HelloMessage;