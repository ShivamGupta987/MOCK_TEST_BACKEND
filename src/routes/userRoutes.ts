import express, { Router } from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController';

const router: Router = express.Router();

// User routesss
router.post('/', createUser as express.RequestHandler);
router.get('/', getAllUsers as express.RequestHandler);
router.get('/:id', getUserById as express.RequestHandler);
router.put('/:id', updateUser as express.RequestHandler);
router.delete('/:id', deleteUser as express.RequestHandler);

export { router as userRoutes };