var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');



var Main = (props) => {
  return (
    <div>
        <Nav/>
        <div classname="row">
          <div className="colums medium-6 large-4 small-centered">
            {props.children}
          </div>
        </div>
    </div>

  );
}

module.exports = Main;
