const express = require('express');
const app = express.Router();

const db = require('../database/library');

//create
app.post('/create', async (req, res) => {
  try {
    return res.json(await db.create('comment', { ...req.body, commentId: await db.createCommentId('comment') }));
  } catch (err) {
    return res.json((await db.createCommentId('comment')) + err);
  }
});

//update
app.patch('/update', async (req, res) => {
  try {
    return res.json(await db.updateOne('comment', { commentId: req.body.commentId }, req.body));
  } catch (err) {
    return res.json(err);
  }
});

//delete
app.delete('/delete', async (req, res) => {
  try {
    return res.json(await db.deleteOne('comment', req.body));
  } catch (err) {
    return res.json(err);
  }
});

module.exports = app;
