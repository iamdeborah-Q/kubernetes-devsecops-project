
const http = require('http');

const server = http.createServer((req, res) => {
    const match = req.url.match(/^\/plusone\/(\d+)\/?$/);

    if (req.method === 'GET' && match) {
        const number = Number(match[1]);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(String(number + 1));
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(5000, '0.0.0.0', () => {
    console.log('Node.js service running on port 5000');
});
