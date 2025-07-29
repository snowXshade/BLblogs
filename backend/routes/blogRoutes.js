import express from 'express';
import authenticate from '../middleware/authMid.js';
import {
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controller/blogController.js';

const router = express.Router();

// POST    /api/blogs/new
router.post('/new', authenticate, createBlog);

// PUT      /api/blogs/update/:id
router.put('/update/:id', authenticate, updateBlog);

// DELETE     /api/blogs/delete/:id
router.delete('/delete/:id', authenticate, deleteBlog);

export default router;
