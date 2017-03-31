let expect = require('expect');
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let jQuery = require('jquery/dist/jquery.min.js');
let ClockForm = require('../../components/clockForm.jsx');

describe("Clock form", () => {
    it("should exists", () => {
       expect(ClockForm).toExist();
    });
    it("should call settime if valid seconds entered", () => {
        "use strict";
        let spy = expect.createSpy();
        let clockForm = TestUtils.renderIntoDocument(<ClockForm settime={spy}/>);
        let $el = jQuery(ReactDOM.findDOMNode(clockForm));
        clockForm.refs.time.value = "109";
        TestUtils.Simulate.submit($el.find("form")[0]);
        expect(spy).toHaveBeenCalledWith({totalSeconds:109, countdownStatus: 'started'});
    });
    it("Should not call if not valid seconds entered", () => {
      "use strict";
      let spy = expect.createSpy();
      let clockForm = TestUtils.renderIntoDocument(<ClockForm settime={spy}/>);
      let $el = jQuery(ReactDOM.findDOMNode(clockForm));
      clockForm.refs.time.value = "abcd";
      TestUtils.Simulate.submit($el.find("form")[0]);
      expect(spy).toNotHaveBeenCalled();
    });
});
