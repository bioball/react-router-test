React = require('react');
Promise = require('bluebird');
Resolver = require('react-resolver');

module.exports = React.createClass({
  mixins: [Resolver.mixin],
  statics: {
    resolve: {
      name: function(){
        return Promise.resolve("Bob Saget");
      }
    }
  },
  render: function(){
    return (
      <p>Hi, my name is {this.props.name}</p>
    );
  }
});