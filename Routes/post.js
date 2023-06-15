const express = require('express');
const app = express.Router();

const db = require('../database/library');

//single read [post, comment]
app.get('/', async (req, res) => {
  try {
    res.json({ post: await db.findOne('post', { postId: req.query.id }, { password: 0 }), comments: (await db.find('comment', { postId: req.query.id }, { password: 0 })).sort((a, b) => new Date(b.date) - new Date(a.date)) });
  } catch (err) {
    return res.json(err);
  }
});

//create
app.post('/create', async (req, res) => {
  try {
    return res.json(await db.create('post', { ...req.body, postId: await db.createPostId('post') }));
  } catch (err) {
    return res.json(err);
  }
});

//update
app.patch('/update', async (req, res) => {
  try {
    return res.json(await db.updateOne('post', { postId: req.body.postId }, req.body));
  } catch (err) {
    return res.json(err);
  }
});

//delete
app.delete('/delete', async (req, res) => {
  try {
    return res.json(await db.deleteOne('post', req.body));
  } catch (err) {
    return res.json(err);
  }
});

module.exports = app;
