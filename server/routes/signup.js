import express from 'express';
import {getSignup} from "../controllers/auth";

const router = express.Router();

router.get('/signup', getSignup);

export default router;