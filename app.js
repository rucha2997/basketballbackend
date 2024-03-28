const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const WebSocket = require("ws");
const { createServer } = require("http");
const app = express();
const server = createServer(app);
const userRoutes = require("./routes/user.route");
const loginRoutes = require("./routes/login.route");
const gameRoutes = require("./routes/game.route");
const { sequelize } = require("./database/init");
const webSocketServer = new WebSocket.Server({ server });
var cors = require("cors");
const authenticationMiddleware = require("./middlewares/authentication.middleware");
const errorMiddleware = require("./middlewares/error.middleware");
webSocketServer.on("connection", (ws) => {
  console.log("connected websocket");
});
app.use((req, res, next) => {
  req.webSocketServer = webSocketServer;
  next();
});
app.use(cors());
app.use(express.json());
app.use(authenticationMiddleware);
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/game", gameRoutes);
app.get("/", (req, res) => {
  res.send("basketball backend");
});

app.use(errorMiddleware)

server.listen(3000, async () => {
  try {
    await sequelize.authenticate();
    console.log("server is running");
  } catch (e) {
    console.log(e, "db error");
  }
});