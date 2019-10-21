import express from 'express';
import {getSignup, postLogin, getLogin, postSignup, getPrivate} from '../controllers/auth';

const router = express.Router();

router.get('/signup', getSignup);
router.post('/signup', postSignup);

router.get('/login', getLogin);
router.post('/login', postLogin);

router.get('/private', getPrivate);

export default router;