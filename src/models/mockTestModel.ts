import mongoose, { Schema, Document } from 'mongoose';

interface IMonitor extends Document {
  userId: string;
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }];
  answers: [{
    questionId: Schema.Types.ObjectId;
    selectedOption: string;
    isCorrect: boolean;
  }];
  score: number;
  createdAt: Date;
}

const mockTestSchema: Schema = new Schema({
  userId: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  answers: [{
    questionId: { type: Schema.Types.ObjectId, ref: 'Question' },
    selectedOption: String,
    isCorrect: Boolean,
  }],
  score: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export const MockTest = mongoose.model<IMonitor>('MockTest', mockTestSchema);
