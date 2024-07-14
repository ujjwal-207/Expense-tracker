import mongoose, { Document, Schema } from "mongoose";

export interface Icalculation extends Document{
    income:number;
    expences:number;
    description:string;
}
const calculationSchema:Schema = new mongoose.Schema({
    income:{
        type:Number,
        reqired:true,

    },
    expences:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
});
const Account = mongoose.models.Account || mongoose.model<Icalculation>('Account',calculationSchema)

export default Account;