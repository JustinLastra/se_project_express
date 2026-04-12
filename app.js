const express = require("express");
const { default: mongoose } = require("mongoose");
const mainRouter = require("./routes/index");

const app = express();

const { port = 3001 } = process.env;



mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.error("Error connecting to DB", err);
  });

  app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
