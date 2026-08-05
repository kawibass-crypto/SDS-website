const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5501;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.zip': 'application/zip',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf'
};

const server = http.createServer((req, res) => {
  // Decode URL to handle spaces/special characters
  let decodedUrl = decodeURIComponent(req.url);
  
  // Strip query parameters
  const questionIdx = decodedUrl.indexOf('?');
  if (questionIdx !== -1) {
    decodedUrl = decodedUrl.substring(0, questionIdx);
  }
  
  let filePath = path.join(__dirname, decodedUrl);
  
  // If it's a directory, serve index.html inside it
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 Not Found / 未找到文件</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Internal Server Error: ${error.code}\n`);
      }
    } else {
      const headers = {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      };
      if (extname === '.zip') {
        headers['Content-Disposition'] = `attachment; filename="${path.basename(filePath)}"`;
      }
      res.writeHead(200, headers);
      res.end(content);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Local network URL: http://192.168.3.84:${PORT}/`);
});
