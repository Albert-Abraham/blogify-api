// src/controllers/posts.controller.js
// Controller for posts routes - keeps business logic out of routers

module.exports.getAllPosts = function getAllPosts(req, res) {
  // logic moved from router: respond with same message as before
  return res.send('Fetching all blog posts from the modular router!');
};
