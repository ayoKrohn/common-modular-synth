import express from "express";
const app = express();

app.use(express.urlencoded({extended: true}));

import path from "path";
app.use(express.static(path.resolve("../client/public")));

import session from "express-session";
const sessionMiddleware = session({
    secret: "heylove",//process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
});
app.use(sessionMiddleware);

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
  console.log('A new client has connected!');
  console.log(socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));

app.get('*', (req, res) => res.sendFile(path.resolve('../client/public/index.html')));

server.listen(3000, () => {
    console.log('listening on port 3000');
  });


