// src/routes/posts.routes.js
const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts.controller');

// GET /api/v1/posts/
router.get('/', (req, res) => {
  res.send('Fetching all blog posts from the modular router!');
});

// GET /api/v1/posts/:postId
router.get('/:postId', postsController.getPostById);

// POST /api/v1/posts/
router.post('/', (req, res) => {
  res.send('Creating a new blog post...');
});

module.exports = router;
