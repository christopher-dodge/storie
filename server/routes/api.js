const express = require('express');
const router = express.Router();
const db = require('../models');

// From boilerplate - for display time component
router.get('/current-time', (req, res) => {
  const unixTime = new Date().getTime();
  res.json({ time: unixTime });
});

// INDEX Route - show all stories
router.get('/blogs', async (req, res) => {
  try {
    const allStories = await db.Blog.find();
    
    // console.log(allStories);
    res.json(allStories);
  } catch(err) {
    return err;
  }
});

// CREATE Route - add new storie to the DB
router.post('/blogs', async (req, res) => {
  console.log(req.body);
  try {
    const createdBlog = await db.Blog.create(req.body);
    
    // console.log(createdBlog);
    res.json(createdBlog);
  } catch(err) {
    return err;
  }
});

module.exports = router;