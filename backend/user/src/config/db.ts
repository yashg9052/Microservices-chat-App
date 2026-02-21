import mongoose, { connect } from "mongoose";


const connectDb = async () => {
  const url = process.env.MONGO_URI;
  if (!url) {
    throw new Error("Mongo_uri is not defined in environment variables ");
  }
  try {
    await mongoose.connect(url, {
      dbName: "Chat-microservice-app",
    });
    console.log("Connected to mongodb");
  } catch (error) {
    console.error("Failed to connect to mongodb", error);
    process.exit(1);
  }
};
export default connectDb