const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 1966;
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*" }, pingTimeout: 6000 });

app.use(express.json());
app.use(cors());
app.use("/api", require("./router/userRouter"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Socket.io" });
});
const url =
  "mongodb+srv://Emmanuel:123456789Somto@cluster0.firhs.mongodb.net/socketio?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("database is now connected...!");
  })
  .catch(() => {
    console.log("Connection failed");
  });
const db = mongoose.connection;
//Watch on
db.on("open", () => {
  db.collection;
});
io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.emit("chat message", (text) => {
    console.log(text);
  });
});
server.listen(port, () => {
  console.log("connecting to server .!", port);
});
