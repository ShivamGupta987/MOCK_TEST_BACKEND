import express, { Router } from 'express';
import { createQuestion } from '../controllers/questionController';

const router: Router = express.Router();
// routes for question 
router.post('/', createQuestion as express.RequestHandler);

export { router as questionRoutes };
