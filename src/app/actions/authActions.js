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
  axios.post('/signup', data);
};
