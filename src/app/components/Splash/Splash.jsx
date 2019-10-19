import React from 'react';
import {CssBaseline, Typography} from '@material-ui/core';
import LoginFormContainer from '../../containers/LoginFormContainer';

const Splash = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Typography>
        Welcome to mixfix.io
      </Typography>
      <LoginFormContainer/>
    </React.Fragment>
  )
};
export default Splash;