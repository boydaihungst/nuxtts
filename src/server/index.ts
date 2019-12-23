import { NuxtConfigurationServerMiddleware } from '@nuxt/types/config/server-middleware';
import App from './app';
import UserController from './controllers/user/users.controller';

const app = new App([new UserController()]).app;
console.log(app.stack);
const _: NuxtConfigurationServerMiddleware = {
  path: '/api',
  handler: app,
};
export default _;
