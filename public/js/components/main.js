/** @jsx React.DOM */

var React = require("react");

/**
 * @class
 * 
 * Write a friendly hello message!
 */
var HelloMessage = React.createClass(
/** @lends HelloMessage */
{
    /**
     * Render the message Hello world and the name
     */
    render: function() {
        return <div>Hello world {this.props.name}</div>;
    }
});

/**
 * @class
 * 
 * Write bye bye!
 */
var GoodbyeMessage = React.createClass(
/** @lends GoodbyeMessage */
{
    /**
     * Renders just a single item.
     * @
     */
    /**
     * Renders just the single item
     * @param   {Object} item   The item to be rendered.
     */
    renderItem: function(item) {
        return null;
    },

    /**
     * Renders all the items
     */
    render: function() {
        return <div>Bye bye {this.props.name}</div>;
    }
});


/** @module Main */
module.exports.HelloMessage = HelloMessage;