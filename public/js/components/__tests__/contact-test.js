var expect = require("chai").expect;
var Test = require("react-test-tree");
import React from "react/addons";
import {Router} from "react-router";

import Contact from "../contact.jsx";
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

            it("should display the title as the name of the contact", (done) => {
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
});
