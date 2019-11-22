const ws = require('websocket-stream');
const stream = ws('ws://localhost:8000');
stream.write('hello\n');
stream.end();