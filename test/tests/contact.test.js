var expect = require("chai").expect;
var Test = require("react-test-tree");
import React from "react/addons";
import {Router} from "react-router";

import Contact from "../../public/js/components/contact";
import ContactList from "../../public/js/components/contactlist";
import {LoadStates} from "../../public/js/constants/constants";

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
                expect(page.description.innerText).to.equal("Bob is 22 old.");
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

    describe("Contactlist", () => {

        describe("A well formed component list", () => {
            const testList = {
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

            let page = Test(<ContactList contactList={testList} loadState={LoadStates.LOADED} current={2}/>, {
                context: {
                    router: Router
                }
            });

            console.log(page);

            // it("should display the title as the name of the contact", (done) => {
            //    expect(page.title.innerText).to.equal("Bob");
            //    done();
            // });
            // it("should display the description with the age", (done) => {
            //    expect(page.description.innerText).to.equal("Bob is 22 old.");
            //    done();
            // });
        });

    });

});
