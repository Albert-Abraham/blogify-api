const http = require('http');
const PORT = process.env.PORT || 5000;

const { getHealth } = require('./controllers/healthController');
const { format } = require('./utils/exampleUtil');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    const payload = getHealth();
    const body = format(payload);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(body);
  }

  const body = format({ message: 'Welcome to Blogify API (initial setup)' });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(body);
});

server.listen(PORT, () => {
  console.log(`Blogify API listening on port http://localhost:${PORT}`);
  
});

module.exports = server; // exported for testing or further composition
