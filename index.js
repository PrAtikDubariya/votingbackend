const express = require("express");
const app = express();
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

app.use("/api/login", LogInRoute);
app.use("/api/admin", AdminRoute);

app.listen(PORT, () => {
    console.log(`App Start In ${PORT}`);
});