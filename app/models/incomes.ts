import mongoose, { Document, Schema } from "mongoose";

export interface Icalculation extends Document {
  income: number;
  description: string;
  userId: string;
}
const IncomeSchema: Schema = new mongoose.Schema({
  income: {
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
const Incomes =
  mongoose.models.Incomes ||
  mongoose.model<Icalculation>("Incomes", IncomeSchema);

export default Incomes;
