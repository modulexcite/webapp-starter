/** @jsx React.DOM */

describe("Main Module", function () {

    describe("HelloMessage component", function () {
        var Main = require("../../build/js/components/main.js");
        var React = require('react/addons');
        var LoadStates = require('../../build/js/constants/constants.js').LoadStates;
        var TestUtils = React.addons.TestUtils;
        
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
            expect(helloMessageComponent.state.name).to.equal("Fred");
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