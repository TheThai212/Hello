var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage =require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      location:'Miami',
      temp:88
    }
  },
  handleSearch:function(location){
// debugger;
    this.setState({
      location: location,
      temp:23
    });

  },
  render:function(){
      var {temp, location} = this.state;
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    );
  }

});

module.exports = Weather;
