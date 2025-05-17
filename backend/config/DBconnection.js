import mongoose from "mongoose";
async function DB_connect() {
  const DB_url = process.env.DB_Connection;
  try {
    await mongoose.connect(DB_url);
    console.log("DB connected successfully!");
  } catch (err) {
    console.log("An Error occured to connect with mongoDB", err);
  }
}
export default DB_connect;
