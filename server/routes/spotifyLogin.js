import express from 'express';
import {handleSpotifyLogin} from '../controllers/spotifyLogin';

const router = express.Router();

router.get('/spotifyLogin', handleSpotifyLogin);

export default router;