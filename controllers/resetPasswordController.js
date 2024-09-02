// controllers/authController.js
import crypto from 'crypto';
import User from '../models/userModel.js';
import { sendEmail } from '../utils/mailer.js';
import bcrypt from 'bcryptjs';

export const requestPasswordReset = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetToken = resetToken;
    user.resetTokenExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const message = `Reset token: ${resetToken}`;
    await sendEmail(user.email, 'Password Reset Request', message);

    res.status(200).json({ message: 'Reset token sent to email' });
  } catch (error) {
    next(error);
  }
};




export const resetPassword = async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;

    const user = await User.findOne({
      resetToken: token,
      resetTokenExpires: { $gt: Date.now() }, // Ensure token is not expired
    });
    if (!user) return res.status(400).json({ message: 'Invalid or expired token' });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetToken = undefined; // Clear the reset token
    user.resetTokenExpires = undefined; // Clear the expiration
    await user.save();

    res.status(200).json({ message: 'Password has been reset successfully' });
  } catch (error) {
    next(error);
  }
};
