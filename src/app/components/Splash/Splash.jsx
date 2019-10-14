import React from 'react';
import {CssBaseline, Typography} from '@material-ui/core';
import {LoginContainer} from '../../containers/LoginContainer';

const Splash = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Typography>
        Welcome to mixfix.io
      </Typography>
      <LoginContainer/>
    </React.Fragment>
  )
};
export default Splash;