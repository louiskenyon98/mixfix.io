import User from "../models/user";
import {determineLoggedInState} from '../util/determineLoggedInState';

export const postSignup = (req, res, next) => {

};

export const getSignup = (req, res) => {
  res.redirect('/signupform')
};

export const postLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  // res.setHeader('Cache-Control', 'private');
  // res.cookie('isLoggedIn', true);

  let user = await User.findById('5dab524e659c863c2c798b24');
  try {
    req.session.isLoggedIn = true;
    req.session.user = user;
    res.send({"redirect": "/"});
  } catch (error) {
    console.log('error!', error);
  }
};

export const getLogin = (req, res, next) => {
  res.setHeader('Cache-Control', 'private');
  res.cookie('isLoggedIn', false);
  console.log('session:', req.session.isLoggedIn);
  console.log('user:', req.session.user);

  //Pass off to react-router
  next();
};