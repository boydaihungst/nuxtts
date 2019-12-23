import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import session from 'cookie-session';
import csrf from 'csurf';
import cors from 'cors';

import moment from 'moment';
import BaseController from './models/BaseController';

class App {
  public app: express.Application;

  constructor(controllers: BaseController[]) {
    this.app = express();

    this.initializeControllers(controllers);
    this.initializeMiddlewares();
  }

  private initializeMiddlewares() {
    this.app.use(helmet());
    this.app.use(
      session({
        name: 'session',
        keys: ['key1', 'key2'],
        secureProxy: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        domain: 'localhost',
        path: '/api',
        expires: moment()
          .add(process.env.COOKIE_EXPIRED, 'day')
          .toDate(),
      }),
    );
    // this.app.use(csrf({ cookie: true }));
    this.app.use(
      cors({
        origin: true,
      }),
    );
    // FIXME Update csrf -> status: pending
    this.app.use(bodyParser.json());
    // error handler
    this.app.use(
      (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        if (err.code !== 'EBADCSRFTOKEN') {
          return next(err);
        }

        // handle CSRF token errors here
        res.status(403);
        res.send('CSRF_ERROR');
      },
    );
  }

  private initializeControllers(controllers: BaseController[]) {
    controllers.forEach((controller: BaseController) => {
      this.app.use(controller.router);
    });
  }
}

export default App;
