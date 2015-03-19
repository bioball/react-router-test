var React = require('react');
var Promise = require('bluebird');
var Resolver = require('react-resolver');
var Router = require('react-router');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      name: this.getParams().name
    };
  },
  mixins: [Resolver.mixin, Router.State],
  statics: {
    resolve: {
      name: function(){
        return Promise.resolve(this.getParams().name);
      }
    },
    willTransitionTo: function(transition, params){
      this.setState({name: params.name})
    }
  },
  render: function(){
    return (
      <p>Hi, my name is {this.state.name}</p>
    );  
  }
});