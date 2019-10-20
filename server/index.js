import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';

import loginRoute from './routes/login';
import callbackRoute from './routes/callback';
import refreshRoute from './routes/refreshToken';
import rootRoute from './routes/root';
import signUpRoute from './routes/signup';

import {distPath} from './config/consts';
import {mongoConnect} from "./util/database";

const app = express();
let port = process.env.PORT || 8080;

app.use(express.static(distPath))
  .use(cors())
  .use(cookieParser())
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(session({secret: 'mySecretHere', resave: false, saveUninitialized: false}))
  .use(loginRoute)
  .use(callbackRoute)
  .use(refreshRoute)
  .use(signUpRoute)
  //This must be at the bottom
  .use(rootRoute);

mongoConnect(() => {
  app.listen(port, console.log('listening on ', port));
});

