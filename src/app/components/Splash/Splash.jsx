import React from 'react';
import {Card, CardContent, CssBaseline, Typography} from '@material-ui/core';
import Login from '../Login/Login';

const Splash = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Card>
        <CardContent>
          <Typography>
            Welcome to mixfix.io
          </Typography>
          <Login/>
        </CardContent>
      </Card>
    </React.Fragment>
  )
};
export default Splash;