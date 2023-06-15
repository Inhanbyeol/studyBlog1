const express = require('express');
const app = express.Router();

const db = require('../database/library');

//create
app.post('/create', async (req, res) => {
  return res.json(await db.create('comment', { ...req.body, commentId: await db.createCommentId('comment') }));
});

//update
app.patch('/update', async (req, res) => {
  return res.json(await db.updateOne('post', { postId: req.body.postId }, req.body));
});

//delete
app.delete('/delete', async (req, res) => {
  return res.json(await db.deleteOne('comment', req.body));
});

module.exports = app;
