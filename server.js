const http = require('http');

const data = [
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' },
];

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-type': 'application/json',
    'X-Powered-By': 'Node.js',
  });

  console.log(req.header);

  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
