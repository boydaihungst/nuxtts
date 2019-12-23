import { Router } from 'express';
export default abstract class BaseController {
  path: string = '/';
  router: Router = Router();
  abstract intializeRoutes(): void;
}
