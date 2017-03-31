let React = require('react');
let ReactDOM = require('react-dom');
let jQuery = require('jquery/dist/jquery.min.js');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');

let Control = require("../../components/controls.jsx");

describe("Control module tests: ", () => {
  "use strict";
  it("should exist", () => {
    expect(Control).toExist();
  });
  it("should pause time", () => {
    let spy = expect.createSpy();
    let control = TestUtils.renderIntoDocument(<Control settime={spy} countdownStatus="started"/>);
    let $el = jQuery(ReactDOM.findDOMNode(control));
    TestUtils.Simulate.click($el.find("#paused")[0]);
    expect(spy).toHaveBeenCalledWith({countdownStatus:"paused"})
  });
  it("should clear time", () => {
    let spy = expect.createSpy();
    let control = TestUtils.renderIntoDocument(<Control settime={spy} countdownStatus="started"/>);
    let $el = jQuery(ReactDOM.findDOMNode(control));
    TestUtils.Simulate.click($el.find("#clear")[0]);
    expect(spy).toHaveBeenCalledWith({totalSeconds: 0, countdownStatus:'stopped'})
  });
  it("should unpause time", (done) => {
    let spy = expect.createSpy();
    let control = TestUtils.renderIntoDocument(<Control settime={spy} countdownStatus="started"/>);
    let $el = jQuery(ReactDOM.findDOMNode(control));
    TestUtils.Simulate.click($el.find("#paused")[0]);
    setTimeout(() => {
      TestUtils.Simulate.click($el.find("#paused")[0]);
      expect(spy).toHaveBeenCalledWith({countdownStatus: "paused"}); //todo: started
      done();
    },1000);
  })
});
