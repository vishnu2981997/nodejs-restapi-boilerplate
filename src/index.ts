import express, { Response } from 'express';
import bodyParser from 'body-parser';
import config from 'config';
import cors from 'cors';
import routesV1 from './api/v1/routes';
import servicesV1 from './api/v1/services';
import controllersV1 from './api/v1/controllers';
import middlewareV1 from './api/v1/middleware';
import { ErrorHandler, handleError } from './api/v1/helpers/error.helpers';
import { cron1 } from './api/v1/crons';

import { IGetUserAuthInfoRequest } from './api/v1/definitions';

const app = express();

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    limit: '1mb',
    extended: true,
  })
);

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: '1mb' }));

app.use((req: IGetUserAuthInfoRequest, res: Response, next) => {
  req.userAgent = req.get('User-Agent');
  req.ipAddress = req.connection.remoteAddress;
  next();
});

// check accessToken
app.use(middlewareV1.authMiddleware.formatAccessToken());

// get username
app.use(middlewareV1.authMiddleware.getUserName());

// get service name
app.use(middlewareV1.authMiddleware.getServiceName());

const router = express.Router;
const apiMiddlewareV1 = middlewareV1;
const apiServicesV1 = servicesV1({ config });
const apiControllersV1 = controllersV1({ config, apiServicesV1 });

app.use('/api/v1', routesV1({ router, apiMiddlewareV1, apiControllersV1 }));

app.get('*', (req, res) => {
  throw new ErrorHandler(404, 'No such route found');
});

app.use((err, req, res, next) => {
  handleError(err, req, res);
});

process.setMaxListeners(0);

cron1();

const port = config.get('server.port');
const host = config.get('server.host');

if (typeof port === 'string') {
  if (typeof host === 'string') {
    app.listen(parseInt(port), host, () => {
      console.log(`API started at http://${host}:${port}`);
    });
  }
}

export default app;
