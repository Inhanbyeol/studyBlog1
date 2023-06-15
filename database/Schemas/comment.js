const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  commentId: { type: Number, required: true, unique: true },
  postId: { type: Number, required: true },
  nickname: { type: String, required: true },
  password: { type: String, required: true },
  body: { type: String, required: true },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('comment', CommentSchema);
