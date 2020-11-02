const express = require('express');
const router = express.Router();
const db = require('../models');

// From boilerplate - for display time component
router.get('/current-time', (req, res) => {
  const unixTime = new Date().getTime();
  res.json({ time: unixTime });
});

// Create Blog Entry
router.post('/blogs', async (req, res) => {
  try {
    const createdBlog = await db.Blog.create({
      title: "Yata yata",
      body: "This is the body"
    });

    console.log(createdBlog);
    res.json(createdBlog);
    
  } catch(err) {
    return err;
  }
});

module.exports = router;