// controllers/healthController.js
// sample controller that returns a health payload

module.exports.getHealth = function getHealth() {
  return {
    status: 'ok',
    service: 'Blogify',
    timestamp: new Date().toISOString()
  };
};
