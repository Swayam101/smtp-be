import mongoose from "mongoose";

const connectDB = async (DB_URI: string) => {
  try {
    await mongoose.connect(DB_URI);
    console.info(`DB connection Successful`);
  } catch (error) {
    console.error("DB Connection Error Occured",error);
  }
};

export default connectDB;
