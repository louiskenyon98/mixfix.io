import express from 'express';
import {handleCallback} from '../controllers/callback';

const router = express.Router();

router.get('/callback', handleCallback);

export default router;
