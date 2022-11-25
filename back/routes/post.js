const express = require('express');
const router = express.Router();

router.post('/boardList', (req, res) => {
  //POST /post
  res.json({ id: 1, content: 'hi' });
});

module.exports = router;
