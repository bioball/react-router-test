Route = require('react-router').Route
Main = require('./components/Main.jsx')
One = require('./components/One.jsx')
OneChild = require('./components/OneChild.jsx')
Two = require('./components/Two.jsx')

module.exports = (
  <Route handler={Main}>
    <Route name="one" path="/1" handler={One}>
      <Route name="one.child" path="/1/:name" handler={OneChild} />
    </Route>
    <Route name="two" path="/2" handler={Two} />
  </Route>
);