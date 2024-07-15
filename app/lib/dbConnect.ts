import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;
export const dbConnect = async () => {
  if (MONGODB_URL) {
    try {
      await mongoose.connect(MONGODB_URL);
      console.log("Connected");
    } catch (err) {
      console.error("Unable to connect to the database ", err);
    }
  } else {
    console.error("Mongo URL not found");
  }
};
