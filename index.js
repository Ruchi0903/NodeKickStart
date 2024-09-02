import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mainRouter from './routes/index.js';
import connectDB from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

// Routes
app.use('/api/v1', mainRouter);

// Error handling middleware
app.use(errorHandler);

// Database connection
connectDB();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
