React = require('react');
Router = require('react-router')
Resolver = require('react-resolver')
resolver = new Resolver();
routes = resolver.route(require('./routes.jsx'));




Router.run(routes, function(Handler){
  React.render(<Handler />, document.getElementById('app'))
})