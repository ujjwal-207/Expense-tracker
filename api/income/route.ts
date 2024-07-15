import dbConnect from "@/lib/dbconnect";
import Account from "@/models/calculation";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { income, expences, description } = await request.json();
    await dbConnect();
    await Account.create({ income, expences, description });
    return NextResponse.json(
      { message: "Message sent sucessfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    await mongoose.connection.close();
    return NextResponse.json(
      { message: "failed to send message" },
      { status: 400 }
    );
  }
}
