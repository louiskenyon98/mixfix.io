import React from 'react';
import {Button, Fab} from '@material-ui/core'

class Login extends React.Component {
  render() {
    return (
      <Fab
        href="/login"
        variant="extended"
        size="medium"
        color="primary"
      >
        Login
      </Fab>
    )
  }
}

export default Login