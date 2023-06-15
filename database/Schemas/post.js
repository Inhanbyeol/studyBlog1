const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  postId: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  nickname: { type: String, required: true },
  password: { type: String, required: true },
  body: { type: String, required: true },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('post', PostSchema);
