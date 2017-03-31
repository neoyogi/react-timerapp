let React = require('react');
let ReactDom = require('react-dom');
let expect = require('expect');
let jQuery = require('jquery/dist/jquery.min.js');
let TestUtils = require('react-addons-test-utils');
let Clock = require('../../components/clock.jsx');

describe("clock", () => {
    it('should exists', () => {
        expect(Clock).toExist();
    });

    describe("render", () => {
        "use strict";
        it("should render clock to output", () => {
            let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            let $el = jQuery(ReactDom.findDOMNode(clock));
            let $actualText = $el.find('.clock-text').text();
            expect($actualText).toBe('01:02')
        });
    });

    describe("formatSeconds", () => {
        it('should formatSeconds for 650 sec', () => {
            "use strict";
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 650;
            let expected = "10:50";
            let actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
       });
        it('should formatSeconds for 61 sec', () => {
            "use strict";
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 61;
            let expected = "01:01";
            let actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
       })
    });
});
