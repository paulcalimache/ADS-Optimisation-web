const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, {cors: {
  origin: "*",
  methods: ["GET", "POST"]
}});

const dataMsg = {
  id: 1,
  arrayId: [
    1,3,4,0,2
  ],
  title: "test",
  shortmsg: "Lorem ipsum dolor sit amet",
  paragraphe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
}

let listDataMsg = []

for (let i = 0; i < 100; i++) {
  dataMsg.id = i;
  listDataMsg.push(dataMsg);
}

io.on("connection", socket => {
  socket.on("GET", () => {
    console.log('received');
    io.emit("MSG", listDataMsg);
  })
})

httpServer.listen(3001, () => {
  console.log('server listen on port 3001');
});