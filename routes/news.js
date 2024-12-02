var express = require('express');
var router = express.Router();
const request = require('request');

const apiKey = '';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

router.get('/', async (req, res) => {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.json(data);
    }
  });
});

module.exports = router;