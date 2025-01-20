import { Request, Response } from 'express';
import { MockTestService } from '../services/mockTestService';

export const generateMockTest = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId.trim();  

    const mockTest = await MockTestService.generateMockTest(userId);
    res.status(201).json(mockTest); 
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error generating mock test', error: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred during mock test generation' });
    }
  }
};
// submit mock test
export const submitMockTest = async (req: Request, res: Response) => {
  try {
    const { mockTestId, answers } = req.body;
    const updatedMockTest = await MockTestService.calculateScore(mockTestId, answers);
    res.status(200).json(updatedMockTest); 
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error submitting mock test', error: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred during mock test submission' });
    }
  }
};
