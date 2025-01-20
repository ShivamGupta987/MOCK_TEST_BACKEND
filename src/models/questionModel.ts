import mongoose, { Schema, Document } from 'mongoose';

interface IQuestion extends Document {
  questionText: string;
  options: string[];
  correctAnswer: string;
  difficultyLevel: 'easy' | 'medium' | 'hard'; 
}
// question schema
const questionSchema: Schema = new Schema(
  {
    questionText: { type: String, required: true },
    options: { type: [String], required: true }, 
    correctAnswer: { type: String, required: true },
    difficultyLevel: { 
      type: String, 
      enum: ['easy', 'medium', 'hard'], 
      required: true 
    },
  },
  { timestamps: true } 
);

export const Question = mongoose.model<IQuestion>('Question', questionSchema);
