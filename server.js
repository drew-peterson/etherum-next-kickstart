const express = require('express');
const next = require('next');
const routes = require('./routes');
const app = next({
  dev: process.env.NODE_ENV !== 'production'
});
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server
    .post('/drew', (req, res) => {
      res.send({ message: 'My name is drew' });
    })
    .use(handler)
    .listen(3000);
});

// update package.json dev script
