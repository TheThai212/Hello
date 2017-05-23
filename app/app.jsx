var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}></Route>// khi them /about se chuyen den component about
        <Route path="examples" component={Examples}></Route>
      <IndexRoute component={Weather}>  </IndexRoute>
    </Route>
  </Router>,
  document.getElementById('app')
);
