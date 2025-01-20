import { MockTest } from '../models/mockTestModel';
import { Question } from '../models/questionModel';
import mongoose from 'mongoose';

export class MockTestService {

  static async generateMockTest(userId: string) {
    try {
    
      const questions = await Question.aggregate([{ $sample: { size: 10 } }]);


      const mockTest = new MockTest({
        userId,
        questions: questions.map((question: any) => question._id), 
        answers: [], 
      });

      // Save the mock test document
      await mockTest.save();

      return mockTest;
    } catch (error) {
      throw new Error(`Error generating mock test: ${(error as Error).message}`);
    }
  }

  static async calculateScore(mockTestId: string, answers: any[]) {
    try {
      // data ftch krrha 
      const mockTest = await MockTest.findById(mockTestId).populate('questions') as any;
      
      if (!mockTest) {
        throw new Error('Mock test not found');
      }

      let score = 0;

      // Check each answer and calculate score
      answers.forEach((answer: any, index: number) => {
        const question = mockTest.questions[index];
        if (!question) return; 

        const correctAnswer = question.correctAnswer; 
        if (answer.selectedOption === correctAnswer) {
          score++;
        }
      });

      
      mockTest.score = score;
      await mockTest.save();

      return mockTest;
    } catch (error) {
      throw new Error(`Error calculating score: ${(error as Error).message}`);
    }
  }
}
