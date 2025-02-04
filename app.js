const http = require('http');
const PORT = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  res.end('Hello, from Node.js app!');
};

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
  if (err) {
    return console.log('Error:', err);
  }
  console.log('Server is listening on', PORT);
});

