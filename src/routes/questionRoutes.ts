import express, { Router } from 'express';
import { createQuestion } from '../controllers/questionController';

const router: Router = express.Router();

router.post('/', createQuestion as express.RequestHandler);

export { router as questionRoutes };
