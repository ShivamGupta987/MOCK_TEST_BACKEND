import express, { Router } from 'express';
import { generateMockTest, submitMockTest  } from '../controllers/mockTestController';

const router: Router = express.Router();
// routes fot mock
router.get('/:userId', generateMockTest);  

router.post('/submit', submitMockTest);


export { router as mockTestRoutes };
