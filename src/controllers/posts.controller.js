// src/controllers/posts.controller.js
// Controller functions for posts

module.exports.getPostById = async function getPostById(req, res) {
  try {
    const postId = req.params.postId;
    return res.json({ message: 'Fetching data for post with ID: ' + postId });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
