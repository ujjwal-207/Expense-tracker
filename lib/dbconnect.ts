import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
export const dbConnect = async () => {
  if (MONGODB_URI) {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log("Connected");
    } catch (err) {
      console.error("Unable to connect to the database ", err);
    }
  } else {
    console.error("Mongo URL not found");
  }
};
