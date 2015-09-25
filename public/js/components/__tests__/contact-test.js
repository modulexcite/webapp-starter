/* eslint-env mocha */

var expect = require("chai").expect;
var Test = require("react-test-tree");
import React from "react/addons"; //eslint-disable-line

var Router = require("react-router");
import {Route} from "react-router";
var TestLocation = require("react-router/lib/locations/TestLocation");

import Contact from "../contact.jsx";
import ContactList from "../contactlist.jsx";
import {LoadStates} from "../../constants/constants.js";

describe("Main Module", function () {

    describe("Contact", () => {

        describe("A good component", () => {
            const test = {
                id: 2,
                name: "Bob",
                age: 22
            };

            let page = Test(<Contact contact={test}/>);

            it("should display the title as the name of the contact...", (done) => {
                expect(page.title.innerText).to.equal("Bob");
                done();
            });
            it("should display the description with the age", (done) => {
                expect(page.description.innerText).to.equal("Bob is 22 years old.");
                done();
            });
        });

        describe("A bad component", () => {
            let page = Test(<Contact contact={null}/>);

            it("should display no contact selected when passed null as a contact", (done) => {
                expect(page.innerText).to.equal("No contact selected");
                done();
            });

        });
    });

    describe("ContactList", () => {

        describe("A good component", () => {

            const testContactList = {
                1: {
                    id: "1",
                    name: "Dan",
                    age: 22
                },
                2: {
                    id: "2",
                    name: "Lee",
                    age: 33
                },
                3: {
                    id: "3",
                    name: "Nick",
                    age: 14
                }
            };

            it("should display the correct list of links", (done) => {

                const ContactListHandler = React.createClass({
                    render() {
                        return (
                            <ContactList
                                loadState={LoadStates.LOADED}
                                contactList={testContactList}
                                current={1} />
                        );
                    }
                });

                // React router setup
                var routes = [
                    <Route name="contacts" handler={ContactListHandler} />
                ];
                var div = document.createElement("div");
                var location = new TestLocation([ "/contacts" ]);
                Router.run(routes, location, (Handler) => {
                    var handler = (
                        <Handler/>
                    );
                    React.render(handler, div, () => {
                        var row = div.querySelector(".row");
                        var Sidebar = row.querySelector(".col-md-3");

                        var contactLink = Sidebar
                            .querySelectorAll(".row")[0]
                            .querySelector(".col-md-3")
                            .querySelector("span")
                            .querySelector("a");

                        expect(contactLink.innerHTML).to.equal("Dan");
                        expect(contactLink.getAttribute("href")).to.equal("/contacts?id=1");

                        done();
                    });
                });
            });
        });
    });
});
