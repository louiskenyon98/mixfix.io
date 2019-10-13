import React from 'react';
import {Typography} from '@material-ui/core';
import LoginFormContainer from "./LoginFormContainer";

export class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formValues) {
    event.preventDefault();
    console.log(`Thanks for submitting your form values, they were: ${formValues}`)
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h2">
          Please log in
        </Typography>
        <LoginFormContainer
          onSubmit={this.handleSubmit}
        />
      </React.Fragment>
    )
  }
}