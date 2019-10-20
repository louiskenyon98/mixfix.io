import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import connectMongo from 'connect-mongodb-session'

import spotifyLoginRoute from './routes/spotifyLogin';
import callbackRoute from './routes/callback';
import refreshRoute from './routes/refreshToken';
import rootRoute from './routes/root';
import signUpRoute from './routes/auth';

import {distPath} from './config/consts';
import {connectionURI, mongoConnect} from './util/database';

const app = express();
const MongoStore = connectMongo(session);
const store = new MongoStore({
  uri: connectionURI,
  collection: 'sessions'
});
let port = process.env.PORT || 8080;

app.use(express.static(distPath))
  .use(cors())
  .use(cookieParser())
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(session({secret: 'mySecretHere', resave: false, saveUninitialized: false, store: store}))
  .use(spotifyLoginRoute)
  .use(callbackRoute)
  .use(refreshRoute)
  .use(signUpRoute)
  //This must be at the bottom
  .use(rootRoute);

mongoConnect(() => {
  app.listen(port, console.log('listening on ', port));
});

