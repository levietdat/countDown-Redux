import bodyParser from "body-parser";
import express, { response } from "express";
import cors from "cors";
import router from "./routes/countdown.js";
import mongoose from "mongoose";
const app = express();
import moment from 'moment';
moment().format()
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const urlDB =
  "mongodb+srv://admin:12345@cluster0.eivdlji.mongodb.net/?retryWrites=true&w=majority";
app.use("/countdown", router);

mongoose
  .connect(urlDB, { useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB: " + err.message));
app.listen(port, () => {
  console.log("listening on port  " + port);
});
