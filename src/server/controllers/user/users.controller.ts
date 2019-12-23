import { Request, Response, NextFunction } from 'express';
import BaseController from '../../models/BaseController';

export default class UserController extends BaseController {
  path = '/user';
  constructor() {
    super();
    this.intializeRoutes();
  }

  intializeRoutes(): void {
    this.router.get(this.path, (req, res, next) =>
      this.getAccountInfo(req, res, next),
    );
  }

  // Controller
  getAccountInfo = (req: Request, res: Response, next: NextFunction) => {
    res.send('haha response ne');
  };
}
