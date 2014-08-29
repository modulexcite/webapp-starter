/** @jsx React.DOM */

var React  = require('react');
var Main   = require('./components/main.js');

//Main page router
//var router = new Router();

React.renderComponent(
    <Main.HelloMessage name="Fred" />,
    document.getElementById("content")
);