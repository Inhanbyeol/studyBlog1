const express = require('express');
const app = express.Router();

const db = require('../database/library');

//single read [post, comment]
app.get('/', async (req, res) => {
  if (req.query.id) {
    res.json({ post: await db.findOne('post', { postId: req.query.id }, { password: 0 }), comments: (await db.find('comment', { postId: req.query.id }, { password: 0 })).sort((a, b) => new Date(b.date) - new Date(a.date)) });
  } else {
    res.redirect('/');
  }
});

//create
app.post('/create', async (req, res) => {
  return res.json(await db.create('post', { ...req.body, postId: await db.createPostId('post') }));
});

//update
app.patch('/update', async (req, res) => {
  return res.json(await db.updateOne('post', { postId: req.body.postId }, req.body));
});

//delete
app.delete('/delete', async (req, res) => {
  return res.json(await db.deleteOne('post', req.body));
});

module.exports = app;
