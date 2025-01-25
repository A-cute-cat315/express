var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加
require('dotenv').config();

const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // パーサーオプションを追加

client.connect(err => {
  if (err) {
    console.error('Failed to connect to the database. Error:', err);
    return;
  }
  console.log('Connected successfully to the database');

  const database = client.db('notes');
  const notes = database.collection('notes');

  router.get('/', async (req, res) => {
    try {
      // idが2のドキュメントを取得
      const query = { id: 2 };
      const note = await notes.findOne(query);
      res.json(note);
    } catch (error) {
      console.error('Error fetching the note:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

});

module.exports = router;

