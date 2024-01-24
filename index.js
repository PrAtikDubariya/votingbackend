const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

require("dotenv").config();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const LogInRoute = require("./routes/LogIn");

// localhost://3001/api/signup

app.use("/api", LogInRoute);
app.listen(PORT, () => {
    console.log(`App Start In ${PORT}`);
});