import mongoose from "mongoose";

import { Schema } from "mongoose";

const userSchema = new Schema({
  fullName: { type: String },
  email: { type: String },
  password: { type: String },
  createdOn: { type: Date, default: new Date().getTime() },
});

export default mongoose.model("User", userSchema);
