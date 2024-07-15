import mongoose, { Document, Schema } from "mongoose";

export interface Icalculation extends Document {
  expences: number;
  description: string;
}
const expencesSchema: Schema = new mongoose.Schema({
  expences: {
    id: Number,
    type: Number,
    reqired: true,
  },
  description: {
    id: Number,
    type: String,
    required: true,
  },
});
const Expences =
  mongoose.models.Account ||
  mongoose.model<Icalculation>("Expences", expencesSchema);

export default Expences;
