import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button, Container, CssBaseline} from '@material-ui/core';
import TextInput from '../components/common/reduxFormFields/TextInput';


class SignupFormContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  onSubmit(formValues) {
    console.log('signup formValues: ', formValues);
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Name"
            name="name"
            type="text"
            component={TextInput}
          />
          <Field
            label="Email"
            name="email"
            type="email"
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
    'name',
    'email',
    'password'
  ];
  for (let i = 0; i < requiredFields.length; i++) {
    let field = requiredFields[i];
    if(!formValues[field]) {
      errors[field] = 'Required'
    }
  }
  console.log(errors);
  return errors;
};

export default reduxForm({
  form: 'signupForm',
  validate
})(SignupFormContainer)