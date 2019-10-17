import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import loginRoute from './routes/login';
import callbackRoute from './routes/callback';
import refreshRoute from './routes/refreshToken';
import rootRoute from './routes/root';
import signUpRoute from './routes/signup';


import {distPath} from './config/consts';

const app = express();
let port = process.env.PORT || 8080;

app.use(express.static(distPath))
  .use(cors())
  .use(cookieParser())
  .use(loginRoute)
  .use(callbackRoute)
  .use(refreshRoute)
  .use(signUpRoute)
  //This must be at the bottom
  .use(rootRoute);

app.listen(port, console.log('listening on ', port));