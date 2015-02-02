/** @jsx React.DOM */

var React  = require('react');
var Main   = require('./components/main');
var Router = require('./routing/router')

React.renderComponent(
    <Main.HelloMessage />,
    document.getElementById("title")
);