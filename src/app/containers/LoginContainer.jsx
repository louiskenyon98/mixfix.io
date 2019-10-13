import React from 'react';
import {connect} from 'react-redux';
import {Typography} from '@material-ui/core';
import LoginFormContainer from "./LoginFormContainer";

export class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formValues) {
    console.log(`Thanks for submitting your form values, they were: ${formValues}`)
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h2">
          Please log in
        </Typography>
        <LoginFormContainer
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    )
  }
}