React = require('react');
Promise = require('bluebird');
Resolver = require('react-resolver');
RouteHandler = require('react-router').RouteHandler;

module.exports = React.createClass({
  mixins: [Resolver.mixin],
  statics: {
    resolve: {
      name: function(){
        return Promise.resolve("Sam Preston");
      }
    }
  },
  render: function(){
    return (
      <div>
        <p>Hi, below is my child.</p>
        <RouteHandler />
      </div>
    );
  }
});