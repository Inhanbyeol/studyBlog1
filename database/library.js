require('dotenv').config();
const mongoose = require('mongoose');

module.exports = {
  create: async (collection, sql) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const result = await db.create(sql);

      return result;
    } catch (err) {
      console.log(err);
      return 0;
    } finally {
      await mongoose.disconnect();
    }
  },
  find: async (collection, sql, option) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const result = await db.find(sql, option);

      return result;
    } catch (err) {
      console.log(err);
      return 0;
    } finally {
      await mongoose.disconnect();
    }
  },
  findOne: async (collection, sql, option) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const result = await db.findOne(sql, option);

      return result;
    } catch (err) {
      console.log(err);
      return 0;
    } finally {
      await mongoose.disconnect();
    }
  },
  updateOne: async (collection, sql, sql2) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const result = await db.updateOne(sql, sql2);

      return result;
    } catch (err) {
      console.log(err);
      return 0;
    } finally {
      await mongoose.disconnect();
    }
  },
  deleteOne: async (collection, sql) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const result = await db.deleteOne(sql);

      return result;
    } catch (err) {
      console.log(err);
      return 0;
    } finally {
      await mongoose.disconnect();
    }
  },
  //Special
  createPostId: async (collection) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const [result] = await db.find().sort({ postId: 'desc' }).limit(1);

      return result.postId + 1;
    } catch (err) {
      console.log(err);
      return 0;
    } finally {
      await mongoose.disconnect();
    }
  },
  createCommentId: async (collection) => {
    try {
      await mongoose.connect(process.env.DB_HOST);

      const db = require(`./Schemas/${collection}`);
      const [result] = await db.find().sort({ commentId: 'desc' }).limit(1);

      return result.commentId + 1;
    } catch (err) {
      console.log(err);
      return 0;
    } finally {
      await mongoose.disconnect();
    }
  },
};
