import mongoose, { Document, Schema } from "mongoose";

export interface Icalculation extends Document {
  expences: number;
  description: string;
  userId: string;
}
const expencesSchema: Schema = new mongoose.Schema({
  expences: {
    id: Number,
    type: Number,
    required: true,
  },
  description: {
    id: Number,
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});
const Expences =
  mongoose.models.Expences ||
  mongoose.model<Icalculation>("Expences", expencesSchema);

export default Expences;
