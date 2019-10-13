import React from 'react';
import {withStyles, TextField} from '@material-ui/core';
import {theme} from '../../../theme';

const styles = {
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
};
const TextInput = ({
  input,
  label,
  meta: {touched, error},
  ...custom
}) => {
  return (
    <TextField
      label={label}
      error={touched && error}
      {...input}
      {...custom}
    />
  )
};
export default withStyles(styles)(TextInput);