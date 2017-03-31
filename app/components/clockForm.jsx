let React = require('react');

let ClockForm  = React.createClass({
    render: function () {
        return(
            <div>
                <form onSubmit={this.settime} className="countdown-form">
                    <input type="text" placeholder="enter time in seconds" ref="time"/>
                    <br/>
                    <button className="button expanded"> set </button>
                </form>
            </div>
        )
    },
    settime: function (e) {
        e.preventDefault();
        let newTime =  this.refs.time.value;
        if (newTime.match(/^[0-9]*$/)){
            newTime = parseInt(newTime);
            if (typeof newTime === "number" && newTime > 0){
                this.props.settime({totalSeconds: newTime, countdownStatus: 'started'});
            }
            this.refs.time.value = ""
        }
    }
});

module.exports = ClockForm;
