/** @jsx React.DOM */

var expect = require('chai').expect;

describe("Main Module", function () {

    describe("HelloMessage component", function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;

        var Main = require("../../public/js/components/main.js");
        var LoadStates = require('../../public/js/constants/constants.js').LoadStates;
        
        //Mock the store in the Main Module
        Main._mockStore({
            "nameLoadState": LoadStates.LOADED,
            "name":          "Fred"
        });

        //Make a react component we can test
        var helloMessageComponent = TestUtils.renderIntoDocument(
             <Main.HelloMessage />
        );

        it('should set its state', function(done){
            expect(helloMessageComponent.state.name).to.equal("Freddy");
            done();
        });

        //Get the DOM node itself so we can test that
        var node = helloMessageComponent.getDOMNode();

        it('should write "Hello"', function(done){
            expect(node.children[0].innerText).to.equal("Hello ");
            done();
        });

        it('should take display the name "Fred"', function(done){
            expect(node.children[1].innerText).to.equal("Fred");
            done();
        });
    });

});