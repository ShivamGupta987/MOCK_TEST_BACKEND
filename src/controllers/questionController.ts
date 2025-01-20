import { Request, Response } from 'express';
import { Question } from '../models/questionModel';

// Create Question
export const createQuestion = async (req: Request, res: Response) => {
  try {
    const { questionText, options, correctAnswer, difficultyLevel } = req.body;


    if (!questionText || !options || !correctAnswer || !difficultyLevel) {
      return res.status(400).json({ message: 'All fields are required' });
    }


    if (!Array.isArray(options) || options.length < 2) {
      return res
        .status(400)
        .json({ message: 'Options must be an array with at least two values' });
    }

    // Create and save the question
    const question = await Question.create({
      questionText,
      options,
      correctAnswer,
      difficultyLevel,
    });

    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: 'Error creating question', error });
  }
};
