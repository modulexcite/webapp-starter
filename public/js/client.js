import React from "react";
import App from "./components/app";
import Router from "react-router";

const {Route} = Router;

const routes = (
    <Route path="/" handler={App} />
);

Router.run(routes, Handler => {
    React.render(<Handler/>, document.getElementById("content"));
});
