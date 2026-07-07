import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const supportSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
}, {timestamps: true});

export default mongoose.model(
    'Support',
    supportSchema
);