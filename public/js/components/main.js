/** @jsx React.DOM */

/** @ignore */
var React = require("react");

// Constants
var Constants = require('../constants/constants.js');
var LoadStates = Constants.LoadStates;

// Stores
var NameStore = require("../stores/store.js");

// Actions
var ActionCreators = require("../actions/actions.js");

/**
 * Private function to fetch the state needed by this component from the stores
 */
function getStateFromStores() {
    return {
        nameLoadState: NameStore.loadState(),
        name: NameStore.getName(),
    };
}

/**
 * @class
 * 
 * Write a friendly hello message!
 */
var HelloMessage = React.createClass(
/** @lends HelloMessage */
{
    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        NameStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        NameStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getStateFromStores());
    },

    /**
     * Render the message Hello world and the name
     */
    render: function() {
        var nameLoaded = this.state.nameLoadState === LoadStates.LOADED;
        var dependenciesLoaded = true;
        var renderView = dependenciesLoaded && nameLoaded;
        if (renderView) {
            return <div>Hello {this.state.name}</div>;
        } else {
            return null;
        }
    }
});

/** @module Main */
module.exports.HelloMessage = HelloMessage;
