import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import users from '../models/userModel.js';

const JWT_SECRET = process.env.JWT_SECRET || 'wanted65';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await users.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new users({ username, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, username: newUser.username },
      JWT_SECRET,
      { expiresIn: '3h'}
    );

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: error.message || 'Server error' });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Please provide both username and password' });
  }

  try {
    const user = await users.findOne({ username });
    if (!user)
      return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: '3h' }
    );

    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const protectedRoute = async (req, res) => {
  try {
    const decoded = req.user; // From middleware
    res.json({ message: `Welcome to your dashboard, ${decoded.username}` });
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
