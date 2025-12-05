// src/controllers/posts.controller.js
// Controller functions for posts

/**
 * Return all posts.
 * Preserves previous behavior by returning the same message wrapped
 * in a standardized response envelope.
 */
module.exports.getAllPosts = function getAllPosts(req, res) {
  const payload = { message: 'Fetching all blog posts from the modular router!' };

  return res.status(200).json({
    success: true,
    data: payload
  });
};

/**
 * Return a single post by ID.
 * If a post is not found, returns 404 with { success: false, message: 'Post not found' }.
 * Otherwise returns 200 with the post wrapped in the envelope.
 */
module.exports.getPostById = function getPostById(req, res) {
  try {
    const postId = req.params.postId;

    // In a real application, replace the following lookup with a DB/service call.
    // Here we preserve existing behavior while supporting a not-found response.
    if (!postId) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    const post = { id: postId, message: 'Fetching data for post with ID: ' + postId };

    return res.status(200).json({
      success: true,
      data: post
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
