import User from "../models/user";
import {determineLoggedInState} from "../util/determineLoggedInState";

export const postSignup = (req, res, next) => {

};

export const getSignup = (req, res) => {
  res.redirect('/signupform')
};

export const postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  req.isLoggedIn = true;
  console.log(req);
  res.setHeader('Cache-Control', 'private');
  res.cookie('isLoggedIn', true);
  res.send({"redirect": "/"});
};

export const getLogin = (req, res) => {

};