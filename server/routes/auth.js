import express from 'express';
import {getSignup, postLogin, getLogin, postSignup, getPrivate, postLogout} from '../controllers/auth';

const router = express.Router();

router.get('/signup', getSignup);
router.post('/signup', postSignup);

router.get('/login', getLogin);
router.post('/login', postLogin);

router.post('/logout', postLogout);

router.get('/private', getPrivate);

export default router;