let React = require("react");
let Clock = require("./clock.jsx");
let ClockForm = require("./clockForm.jsx");
let Controls = require("./controls.jsx");

let Timer = React.createClass({
    getDefaultProps: function () {
        return{
            totalSeconds : 60
        }
    },
    getInitialState: function () {
        "use strict";
        return{
            totalSeconds:this.props.totalSeconds
        }
    },
    render: function () {
        return(
            <div>
                <Clock totalSeconds={this.state.totalSeconds}/>
                <br/>
                <ClockForm settime={this.settime} />
            </div>
        )
    },
    settime: function (update) {
        this.setState(update);
    },
});

module.exports = Timer;
