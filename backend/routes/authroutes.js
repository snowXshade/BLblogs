import express from 'express';
import { signup, login, protectedRoute } from '../controller/authController.js';
import authenticate from '../middleware/authMid.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/protected', authenticate, protectedRoute);

export default router;
