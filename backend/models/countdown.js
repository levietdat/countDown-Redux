import mongoose from "mongoose";

const { Schema } = mongoose;
const countdown = new Schema(
  {
    id: String,
    title:String,
    dateCountDown: Date
  },
  {
    timestamps: true,
  }
);
export const Countdown  = mongoose.model('Countdown',countdown)