import { dbConnect } from "@/app/lib/dbConnect";
import Incomes from "@/app/models/incomes";
import { getAuth } from "@clerk/nextjs/server";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { userId } = getAuth(request);
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    await dbConnect();
    const incomeData = await Incomes.find({ userId }).lean();
    return NextResponse.json(incomeData);
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
  const { userId } = getAuth(request);
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const { income, description } = await request.json();
    await dbConnect();
    await Incomes.create({ userId, income, description });
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
