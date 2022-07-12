import express from "express";
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

import path from "path";
app.use(express.static(path.resolve("../client/public")));

import session from "express-session";
const sessionMiddleware = session({
    secret: "cats",//process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
});
app.use(sessionMiddleware);

import synthRouter from "./router/synthRouter.js";
app.use(synthRouter);

import userRouter from "./router/userRouter.js";
app.use(userRouter);

import http from "http";
const server = http.createServer(app);

// Vi forbinder socket.io til vores server på port 3000. Vores server hedder nu "io".
import { Server } from "socket.io";
const io = new Server(server);

//en funktion der kaldes hver gang en klient connecter med vores server. Funktioner tildeler
//en (socket) til hver klient
io.on("connection", (socket) => {
  console.log(socket.id);
    socket.on("key-pressed", ({data}) => {
    io.emit("play-note", {data})
    });
    socket.on("key-light", ({data}) => {
      io.emit("lightup-key", {data})
    });
    socket.on("turn-off-light", ({data}) => {
      io.emit("key-light-off", {data})
    });
  });

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));

app.get('*', (req, res) => res.sendFile(path.resolve('../client/public/index.html')));

server.listen(3000, () => {
    console.log('listening on port 3000');
  });


