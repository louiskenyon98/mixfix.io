import express from 'express';
import {refreshHandler} from '../controllers/refreshToken';

const router = express.Router();

router.get('/refresh_token', refreshHandler);

export default router;