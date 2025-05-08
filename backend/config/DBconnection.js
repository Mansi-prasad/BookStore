import mongoose from "mongoose";
const connection_URL = "mongodb://localhost:27017/bookstore";
// const connection_URL = process.env.CONNECTION_URI;
async function DB_connect() {
  try {
    await mongoose.connect(connection_URL);
    console.log("connnected to mongoDB");
  } catch (err) {
    console.log(connection_URL);
    console.log("An Error occured to connect with mongoDB", err);
  }
}

export default DB_connect;
