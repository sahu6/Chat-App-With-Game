const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
//app.use(router);
PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server has started.`));