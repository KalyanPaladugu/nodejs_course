const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url == "/about") {
    return res.end('This is the about page.\n');
  }
  if(req.url == "/contact") {
    return res.end('This is the contact page.\n');
  }
  return res.end('404 Not Found\n');
});
const PORT = 3000;  
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});