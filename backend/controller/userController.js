import bcrypt from 'bcryptjs';
import users from '../models/userModel.js';

// GET /api/user/me
export const getUserProfile = (req, res) => {
  res.json(req.user); // Provided by auth middleware
};

// PUT /api/user/update
export const updateUserProfile = async (req, res) => {
  const { name, password } = req.body;

  if (!name && !password) {
    return res.status(400).json({ message: 'Nothing to update' });
  }

  try {
    const updates = {};
    if (name) updates.name = name;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updates.password = hashedPassword;
    }

    const updatedUser = await users.findByIdAndUpdate(req.user._id, updates, {
      new: true,
    }).select('-password');

    res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update user' });
  }
};

// DELETE /api/user/delete
export const deleteUserProfile = async (req, res) => {
  try {
    await users.findByIdAndDelete(req.user._id);
    res.json({ message: 'User account deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete user' });
  }
};
