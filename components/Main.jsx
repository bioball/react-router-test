React = require('react');
Link = require('react-router').Link;
RouteHandler = require('react-router').RouteHandler;
Promise = require('bluebird');

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Test</h1>
        <ul>
          <li>
            <Link to="one">One</Link>
            <ul>
              <li>
                <Link to="one.child" params={{name: "timmy"}}>timmy</Link>
              </li>
              <li>
                <Link to="one.child" params={{name: "bobby"}}>bobby</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="two">Two</Link>
          </li>
        </ul>
        <RouteHandler />
      </div>
    );
  }
});