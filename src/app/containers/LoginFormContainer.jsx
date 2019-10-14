import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button, Container, CssBaseline} from '@material-ui/core';
import TextInput from '../components/common/reduxFormFields/TextInput';

export class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(formValues) {
    console.log('formValues: ', formValues);
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Username"
            name="userName"
            type="text"
            component={TextInput}
          />
          <Field
            label="Password"
            name="password"
            type="password"
            component={TextInput}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </Container>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  const requiredFields = [
    'userName',
    'password'
  ];
  for (let i = 0; i < requiredFields.length; i++) {
    let field = requiredFields[i];
    if (!formValues[field]) {
      errors[field] = 'Required'
    }
  }
  console.log(errors);
  return errors;
};

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginFormContainer)