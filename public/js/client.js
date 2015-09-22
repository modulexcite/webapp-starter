import React from "react";
import App from "./components/app";
import Router from "react-router";
const {Route, DefaultRoute} = Router;

import ContactList from "./components/contactlist";

const routes = (
    <Route path="/" handler={App}>
        <DefaultRoute name="contacts" handler={ContactList} />
    </Route>
);

Router.run(routes, Handler => {
    React.render(<Handler/>, document.getElementById("content"));
});
