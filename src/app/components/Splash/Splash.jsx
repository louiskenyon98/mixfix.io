import React from 'react';
import {Card, CardContent, CssBaseline, Typography} from '@material-ui/core';
import LoginFormContainer from '../../containers/LoginFormContainer';
// import Login from '../SpotifyLogin/SpotifyLogin';

const Splash = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Card>
        <CardContent>
          <Typography>
            Welcome to mixfix.io
          </Typography>
          {/*<Login/>*/}
          <LoginFormContainer/>
        </CardContent>
      </Card>
    </React.Fragment>
  )
};
export default Splash;