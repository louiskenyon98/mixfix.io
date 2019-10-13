import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextInput from '../components/common/reduxFormFields/TextInput';

export class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <form onSubmit={this.props.onSubmit}>
      <Field
        name="username"
        type="text"
        component={TextInput}
      />
    </form>
    )
  }
}

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'username'
  ];
  for(let i = 0; i < requiredFields.length; i++) {
    let field = requiredFields[i];
    if(!values[field]) {
      errors[field] = 'Required'
    }
  }
  return errors;
};

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginFormContainer)