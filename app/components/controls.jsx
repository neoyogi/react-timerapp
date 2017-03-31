let React = require('react');

let Controls = React.createClass({
  proptypes: {
    countdownStatus: React.PropTypes.string.isRequired,
  },

  componentWillReceiveProps: function (newProps) {
    console.log("Component will receive props:", newProps)
  },

  render: function () {
    let that = this;
    function showPauseOptions() {
      if (that.props.countdownStatus !== "started") {
        return <button id="paused" className="button alert hollow expanded" onClick={that.pausetime}> unpause </button>;
      }
      else if (that.props.countdownStatus !== "paused"){
        return <button id="paused" className="button alert hollow expanded" onClick={that.pausetime}> pause </button>;
      }
    }
    return(
      <div>
        <form>
          {showPauseOptions()}
          <button id="clear" className="button alert hollow expanded" onClick={this.clear}>clear</button>
        </form>
      </div>
    )
  },

  clear: function (e) {
    "use strict";
    e.preventDefault();
    console.log("clear");
    this.props.settime({totalSeconds: 0, countdownStatus:'stopped'})
  },

  pausetime: function (e) {
    "use strict";
    e.preventDefault();
    console.log("pausetime");
    if (this.props.countdownStatus === "started"){
      this.props.settime({countdownStatus:'paused'})
    }else if(this.props.countdownStatus === "paused"){
      this.props.settime({countdownStatus: 'started'})
    }
  },
});

module.exports = Controls;
