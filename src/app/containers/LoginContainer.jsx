import React from 'react';
import {Typography} from '@material-ui/core';
import LoginFormContainer from "./LoginFormContainer";

export class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Typography component="h1" variant="h5">
          Please log in
        </Typography>
        <LoginFormContainer/>
      </React.Fragment>
    )
  }
}