import express from 'express';
import {getSignup, postLogin, postSignup} from "../controllers/auth";
import {determineLoggedInState} from "../util/determineLoggedInState";

const router = express.Router();

router.get('/signup', getSignup);
router.post('/signup', postSignup);

router.get('/login', (req, res, next) => {
  console.log(determineLoggedInState(req));

  //Pass off to react-router
  next();
});
router.post('/login', postLogin);

export default router;