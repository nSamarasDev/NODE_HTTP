const http = require('http');

const data = [
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' },
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/plain');
  res.setHeader('X-Powered-By', 'Node.js');
  res.write('Hello');
  const { headers, url, method } = req;
  res.end();
  JSON.stringify({
    success: true,
    data: todos,
  });
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
