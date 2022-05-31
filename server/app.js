import express from "express";
const app = express();

app.use(express.urlencoded({extended: true}));

import path from "path";
app.use(express.static(path.resolve("../client/public")));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    socket.on
})

import session from "express-session";
const sessionMiddelWare = session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
});

app.use(sessionMiddelWare);

server.listen(3000, () => {
    console.log('listening on port 3000');
  });


