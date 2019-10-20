import express from 'express';
import {getSignup, postLogin, getLogin, postSignup} from '../controllers/auth';

const router = express.Router();

router.get('/signup', getSignup);
router.post('/signup', postSignup);

router.get('/login', getLogin);
router.post('/login', postLogin);

export default router;