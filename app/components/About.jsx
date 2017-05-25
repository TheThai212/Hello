var React = require('react');
var {Link}=require('react-router')

var About = (props)=>{
  return(
    <div>
      <h1 className='text-center' >About </h1>
      <p>This is a weather application build on React.I have built this
        for The Complete React Web App Developer Course.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <Link href="https://facebook.github.io/react/">React</Link>-this was the js framework used.
        </li>
        <li>
          <a  href="http://openweathermap.org">Open Weather Map</a>I used Open Weatherm Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
