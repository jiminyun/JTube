import mongoose from "mongoose";

const VideoShema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "FILE URL is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    tpye: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const model = mongoose.model("Video", VideoShema);
export default model;
