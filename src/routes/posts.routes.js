// src/routes/posts.routes.js
const express = require('express');
const router = express.Router();

const { getAllPosts } = require('../controllers/posts.controller');

// GET /api/v1/posts/
router.get('/', getAllPosts);

// POST /api/v1/posts/
router.post('/', (req, res) => {
  res.send('Creating a new blog post...');
});

module.exports = router;
