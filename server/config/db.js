import mongoose from "mongoose";
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb connected on ${conn.connection.host}`);
  } catch (error) {
    console.log(`Mongodb not connected ${error.message}`);
  }
};
export default connectDb;
