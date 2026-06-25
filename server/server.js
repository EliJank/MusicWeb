import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import routerEvents from "./routes/events.js";

dotenv.config();
const app = express();

const corsOptions = {
  origin: "http://localhost:5175",
  credentials: true,
};

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);

  res.header(`Access-Control-Allow-Origin`, `example.com`);

  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);

  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
});
app.use(cors());
app.use("/events", routerEvents);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("prisinjungeme");
    app.listen(process.env.PORT, () => {
      console.log("listening on" + " " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
