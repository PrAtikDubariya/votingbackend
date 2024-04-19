const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const cors = require('cors');
const cookieParser = require("cookie-parser");
require("dotenv").config();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

const LogInRoute = require("./routes/LogIn");
const AdminRoute = require("./routes/Admin");



const connectWithDB = require("./config/database");
connectWithDB();

const server = app.listen(PORT, () => {
  console.log(`Server Start In ${PORT}`);
});

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  }
});
app.set('io', io);
io.on('connection', (socket) => {
  app.use("/api/login", LogInRoute);
  app.use("/api/admin", AdminRoute);

  socket.on('diconnect', () => {
    console.log("Client Disconnected");
  });

  socket.on('reconnect', () => {
    console.log('A user reconnected');
  });

})