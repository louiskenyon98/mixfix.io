const express = require("express"),
  app = express(),
  port = process.env.PORT || 8080;

const request = require('request'); // "Request" library
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const path = require('path');
const distPath = path.join(__dirname, '../dist');

const client_id = '9f8e38fa4a4b4121a8108c36674f4a67'; // Your client id
const client_secret = 'bc25b96167454fa79682074259f137c2'; // Your secret
const redirect_uri = 'http://localhost:8080/callback'; // Your redirect uri


const generateRandomString = (length) => {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

let stateKey = 'spotify_auth_state';

// MIKE: I ADDED THIS
app.use(express.static(distPath));
// app.use(express.static('dist'))
//   .use(cors())
//   .use(cookieParser());


app.get('/login', (req, res) => {
  let state = generateRandomString(16);
  res.cookie(stateKey, state);

  //define authorisation scope
  let scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', (req, res) => {
  let code = req.query.code || null;
  let state = req.query.state || null;

  let storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    let authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {

        let access_token = body.access_token,
          refresh_token = body.refresh_token;

        let options = {
          url: 'https://api.spotify.com/v1/me',
          headers: {'Authorization': 'Bearer ' + access_token},
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, (error, response, body) => {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', (req, res) => {
  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token;
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

// MIKE: I ADDED THIS
app.get('/*', (req,res) =>{
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => console.log(`port: ${port}`));