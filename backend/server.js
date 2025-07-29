import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import connetedDB  from './config/mongodb.js'
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authroutes.js'
import blogRoutes from './routes/blogRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;

const MongoUrl = process.env.MONGO;

// ------------------- MongoDB Connection -------------------
connetedDB();

// ------------------- MongoDB User Model in model folder-------------------

// ------------------- Middlewares -------------------
app.use(cors());
app.use(express.json());

// ------------------- API Routing -------------------

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/blog', blogRoutes);


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
