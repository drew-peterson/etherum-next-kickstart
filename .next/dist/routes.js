'use strict';

var routes = require('next-routes')(); // returns function so invoke...

routes.add('/campaign/new', 'campaign/new').add('/campaign/:address', '/campaign/show') // cannot do wildcard with normal next.js ??
.add('/campaign/:address/requests', '/campaign/requests/index').add('/campaign/:address/requests/new', '/campaign/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZixBLDBCQUF5Qzs7QUFFekMsT0FDRyxBQURILElBQ08sQUFEUCxpQkFDd0IsQUFEeEIsZ0JBRUcsQUFGSCxJQUVPLEFBRlAsc0JBRTZCLEFBRjdCLGtCQUUrQyxBQUYvQztDQUdHLEFBSEgsSUFHTyxBQUhQLCtCQUdzQyxBQUh0Qyw0QkFJRyxBQUpILElBSU8sQUFKUCxtQ0FJMEMsQUFKMUM7O0FBTUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZHJld3BldGVyc29uL0Rlc2t0b3AvdHV0b3JpYWxzL2V0aGVyZXVtL2tpY2tzdGFydCJ9