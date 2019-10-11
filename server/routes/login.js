import express from 'express';
import {handleLogin} from '../controllers/login';

const router = express.Router();

router.get('/login', handleLogin);

export default router;