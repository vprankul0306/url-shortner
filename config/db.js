const mongoose = require("mongoose");

const connect = async (url) => {
  await mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
    });
};

module.exports = connect;
