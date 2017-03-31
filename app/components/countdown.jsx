let React = require("react");
let Clock = require("./clock.jsx");
let ClockForm = require("./clockForm.jsx");
let Controls = require("./controls.jsx");

let Countdown = React.createClass({
    getDefaultProps: function () {
        return{
            totalSeconds : 60,
            countdownStatus : 'stopped'
        }
    },
    getInitialState: function () {
        "use strict";
        return{
            totalSeconds:this.props.totalSeconds,
            countdownStatus:this.props.countdownStatus
        }
    },
   componentDidUpdate: function (prevProps, prevState) {
      console.log("component did update");
      "use strict";
      if(this.state.countdownStatus !== prevState.countdownStatus){
        switch (this.state.countdownStatus){
          case 'started':
            this.startTimer();
            break;
          case 'stopped':
            clearInterval(this.timer);
            break;
          case 'paused':
            clearInterval(this.timer);
            break;
          case 'unpaused':
            this.startTimer();
        }
      }
   },

   componentWillUpdate: function (nextprops, nextstate) {
    console.log("component will update");
   },

   componentWillUnmount: function () {
      console.log("component did unmount");
   },

   componentWillMount: function () {
      console.log("component will mount");
   },

   componentDidMount: function () {
     console.log("component did mount");
   },

   render: function () {
       let that = this;
       function renderCountdown() {
         if(that.state.countdownStatus === "started" || that.state.countdownStatus === "paused"){
           return <Controls settime={that.settime} countdownStatus={that.state.countdownStatus}/>
         }else if(that.state.countdownStatus === "stopped"){
           return <ClockForm settime={that.settime}/>
         }
       }

       return(
           <div>
               <Clock totalSeconds={this.state.totalSeconds}/>
               <br/>
               {renderCountdown()}
           </div>
       )
   },
   settime: function (update) {
        this.setState(update);
    },
   
   startTimer: function () {
      "use strict";
      this.timer = setInterval(() => {
        let newCount = this.state.totalSeconds - 1;
        if (newCount >= 0){
          this.setState({totalSeconds: newCount});
        }else {
          this.setState({totalSeconds: 0, countdownStatus: "stopped"});
          clearInterval(this.timer);
        }
      },1000);
   }
});

module.exports = Countdown;
