import dbConnect from "@/lib/dbconnect";
import Account from "@/models/calculation";
import { NextResponse } from "next/server";

 
export  async function GET(){
    await dbConnect();

    const account = await Account.find({});

    NextResponse.json(account);
}