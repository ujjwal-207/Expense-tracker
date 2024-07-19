import { dbConnect } from "@/app/lib/dbConnect";
import Expences from "@/app/models/expences";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const expencesData = await Expences.find({}).lean();
    return NextResponse.json(expencesData);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to get data",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { expences, description } = await request.json();
    await dbConnect();
    await Expences.create({ expences, description });
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
