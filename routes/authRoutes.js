// routes/authRoutes.js
import express from 'express';
import { register, login, logout, deleteUser } from '../controllers/authController.js';
import authenticateJWT from '../middlewares/authMiddleware.js'; // Middleware to verify JWT

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout); // Optional: Protect if you need to verify token first
router.delete('/delete', authenticateJWT, deleteUser); // Protect with middleware

export default router;
