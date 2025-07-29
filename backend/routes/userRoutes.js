import express from 'express';
import authenticate from '../middleware/authMid.js';
import {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from '../controller/userController.js';

const router = express.Router();

router.get('/me', authenticate, getUserProfile);
router.put('/update', authenticate, updateUserProfile);
router.delete('/delete', authenticate, deleteUserProfile);

export default router;
