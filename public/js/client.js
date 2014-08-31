/** @jsx React.DOM */

var React  = require('react');
var Main   = require('./components/main.js');
var Router = require('./routing/router.js')

React.renderComponent(
    <Main.HelloMessage />,
    document.getElementById("content")
);