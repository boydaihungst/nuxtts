import express from 'express';
import routes from '~/api/routes';
import consola from 'consola';
// Import and Set Nuxt.js options
import config from '../../nuxt.config';
const { Nuxt, Builder } = require('nuxt');
const app = express();

config.dev = process.env.NODE_ENV !== 'production';

const start = async () => {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;
  await nuxt.ready();
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  // app.use(nuxt.render);
  app.use(routes);
  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
};
start();
export default {
  path: '/api',
  handler: app,
};
