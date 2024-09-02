import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


// Register a new user
export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
};

// Login a user
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set token in cookie
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    });

    res.status(200).json({ message: 'Logged in successfully' });
  } catch (error) {
    next(error);
  }
};

// Logout a user
export const logout = async (req, res, next) => {
  try {
    // Clear the access token from cookies
    if (req.cookies && req.cookies.access_token) {
      res.clearCookie('access_token');
      res.status(200).json({ message: 'User logged out successfully' });
    } else {
      res.status(200).json({ message: 'No active session found, but logged out.' });
    }
  } catch (error) {
    next(error);
  }
};

// Delete User Controller
export const deleteUser = async (req, res, next) => {
  try {
    // Assuming the user is authenticated and the user ID is available in req.user (after JWT verification)
    const userId = req.user.id;

    // Find and delete the user
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};
