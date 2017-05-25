var React = require('react');
var {Link} = require('react-router')

var Examples = (props)=>{
  return (
    <div>
      <h1 ClassName="text-center">Examples</h1>
      <p>Here are few Example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=PhiladelPhia'>PhiladelPhia, PA</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
