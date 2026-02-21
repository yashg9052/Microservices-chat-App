import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";
import { createClient } from "redis";
import UserRoutes from "./routes/User.js";
import { connectRabbitMq } from "./config/rabbitMq.js";
import cors from "cors"

export const redisClient = createClient({
  url: process.env.REDIS_URL as string,
});
redisClient
  .connect()
  .then(() => console.log("connected to redis"))
  .catch(console.error);

const app = express();
const port = process.env.PORT;
connectDb();
connectRabbitMq();
app.use(cors())
app.use(express.json());
app.use("/api/v1", UserRoutes);
app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
