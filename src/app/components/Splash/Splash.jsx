import React from 'react';
import {Card, CardContent, CssBaseline, Typography} from '@material-ui/core';
import {LoginContainer} from "../../containers/LoginContainer";

const Splash = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Card>
        <CardContent>
          <Typography>
            Welcome to mixfix.io
          </Typography>
          <LoginContainer/>
        </CardContent>
      </Card>
    </React.Fragment>
  )
};
export default Splash;