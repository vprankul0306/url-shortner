const express = require("express");
const connect = require("./config/db");
const router = require("./routes/url");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/", router);

connect(process.env.MONGO_URI);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
