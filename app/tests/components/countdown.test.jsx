let expect = require('expect');
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let jQuery = require('jquery/dist/jquery.min.js');

let Countdown = require('../../components/countdown.jsx');

describe("countdown page ", () => {
  "use strict";
  it("should exist", ()=> {
    expect(Countdown).toExist()
  });
});

describe("Handle settime ", () => {
  "use strict";
  it("should state to started and totalseconds to some value and decremented", (done) => {
    let countdown = TestUtils.renderIntoDocument(<Countdown />);
    countdown.settime({totalSeconds: 10, countdownStatus: "started"});
    expect(countdown.state.totalSeconds).toBe(10);
    expect(countdown.state.countdownStatus).toBe("started");
    setTimeout(() => {
      expect(countdown.state.totalSeconds).toBe(9);
      done();
    },1001)
  });
  it("should start and complete the countdown and set the totalSeconds to 0 and countdownStatus to stopped", (done) => {
    let countdown = TestUtils.renderIntoDocument(<Countdown/>);
    countdown.settime({totalSeconds:1, countdownStatus:"started"});
    expect(countdown.state.totalSeconds).toBe(1);
    expect(countdown.state.countdownStatus).toBe("started");
    setTimeout(() => {
      expect(countdown.state.countdownStatus).toBe("stopped");
      expect(countdown.state.totalSeconds).toBe(0);
      done()
    }, 2001)
  });
});

