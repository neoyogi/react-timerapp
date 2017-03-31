let React = require('react');

let Clock = React.createClass({
    render: function () {
        return(
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(this.props.totalSeconds)}
                </span>
            </div>
        )
    },
    formatSeconds: (totalSeconds) => {
        "use strict";
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);
        if (seconds < 10 && seconds > 0) {
            seconds = "0" + seconds;
        }
        if (minutes < 10 && minutes > 0){
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    },
});

module.exports = Clock;
