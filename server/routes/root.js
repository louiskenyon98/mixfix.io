import express from 'express';
import {indexPath} from '../config/consts';
const router = express.Router();

router.get('/*', (req, res) => {
  res.sendFile(indexPath)
});
export default router;

