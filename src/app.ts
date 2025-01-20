import express from 'express';
import mongoose from 'mongoose';
import { questionRoutes } from './routes/questionRoutes';
import { userRoutes } from './routes/userRoutes';
import { mockTestRoutes } from './routes/mockTestRoutes';  
import dotenv from 'dotenv';


dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use('/api/questions', questionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/mockTest', mockTestRoutes);


const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error('Error: MONGODB_URI is not defined in environment variables.');
  process.exit(1); 
}

// Database connection and server start
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });
