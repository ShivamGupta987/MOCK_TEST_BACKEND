import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  answeredQuestions: Schema.Types.ObjectId[];
}
// userschema
const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  answeredQuestions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
}, {
  timestamps: true
});

export const User = mongoose.model<IUser>('User', userSchema);
