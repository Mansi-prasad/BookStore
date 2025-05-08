import express from "express";
import DB_connect from "./config/DBconnection.js";
import bookRoute from "./Route/Book_routes.js";
import cors from "cors"; // used when the frontend and backend run on different ports
import userRoute from "./Route/User_routes.js";
// import dotenv from "dotenv";
// dotenv.config();
// const PORT = process.env.PORT || 3001;
const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json()); // to parse the json data in a valid JS object
// mongoDB connection
DB_connect();
//Degining Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`App is running on port http://localhost:${PORT}`);
});
