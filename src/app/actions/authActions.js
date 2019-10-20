import axios from 'axios';

export const signIn = () => {
  return {
    type: 'SIGN_IN'
  }
};
export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
};

export const createUser = data => async dispatch => {
  console.log('createUser action called');
  const response = await axios.post('/signup', data);
  try {
    console.log('form successfully submitted');
    console.log('response.data: ', response.data);
    window.location.href = response.data.redirect
  } catch(error) {
    console.log('error with form submission', error)
  }
};
