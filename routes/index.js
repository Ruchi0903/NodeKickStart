import express from 'express';
import authRoutes from './authRoutes.js';
import resetRoutes from "./resetPasswordRoutes.js";

const router = express.Router();

// Add other routers as your project grows
router.use('/auth', authRoutes);
router.use('/reset', resetRoutes);

export default router;