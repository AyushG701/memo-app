import mongoose from "mongoose";

const { Schema } = mongoose;

const noteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
  isPinned: { type: Boolean, default: false },
  userId: { type: String, required: true },
  createdOn: { type: Date, default: Date.now }, // Use Date.now for the default current time
});

export default mongoose.model("Note", noteSchema);
