/** @jsx React.DOM */

var React = require("react");

require('./main.css');

var logo = document.createElement('img');
logo.src = require('../../img/logo.png');

// Constants
var Constants = require('../constants/constants');
var LoadStates = Constants.LoadStates;

// Stores
var NameStore = require("../stores/store");

// Actions
var ActionCreators = require("../actions/actions");

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
            return (
                <div>
                    <img className="main-image" src={logo.src} />
                    <span className="main-message">Hello {this.state.name}</span>
                </div>
            );
        } else {
            return null;
        }
    }
});

var _mockStore = function(object) {
    getStateFromStores = function() {
        return object;
    }
}

/** @module Main */
module.exports.HelloMessage = HelloMessage;
module.exports._mockStore = _mockStore;
