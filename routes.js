const routes = require('next-routes')(); // returns function so invoke...

routes
  .add('/campaign/new', 'campaign/new')
  .add('/campaign/:address', '/campaign/show') // cannot do wildcard with normal next.js ??
  .add('/campaign/:address/requests', '/campaign/requests/index')
  .add('/campaign/:address/requests/new', '/campaign/requests/new');

module.exports = routes;
