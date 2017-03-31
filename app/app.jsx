require('./index.html');
require('foundation-sites/dist/css/foundation.css');
require('./css/mycss.css');
require('./css/app.scss');
require('./css/reset.css');
let Main = require("./components/main.jsx");
let ReactDOM = require("react-dom");
let React = require("react");
let {Route, Router, IndexRoute, hashHistory} = require("react-router");
let Timer = require("./components/timer.jsx");
let Countdown = require("./components/countdown.jsx");

// (function () {
//   function requireAll(r) { r.keys().forEach(r); }
//   requireAll(require.context('foundation-sites/scss/', true, /\.scss$/));
// })();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" components={Main}>
            <IndexRoute  component={Timer} />
            <Route path="timer" component={Timer}> </Route>
            <Route path="countdown" component={Countdown}> </Route>
        </Route>
    </Router>,
    document.getElementById("app")
);
