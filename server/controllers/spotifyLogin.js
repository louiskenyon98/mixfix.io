import querystring from 'querystring';
import {client_id, redirect_uri} from '../config/auth';
import {generateRandomString} from '../util/generateRandomString';

export const handleSpotifyLogin = (req, res) => {
  let state = generateRandomString(16);
  let stateKey = 'spotify_auth_state';
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
};