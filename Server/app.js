const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1/counter")
  .then(() => {
    console.log("connection is sucessful to DB");
  })
  .catch((err) => {
    console.log("couldn't connect to mongoDb", err);
  });

const counter = require("./Routes/counter");

app.use(counter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app is running on host ${port}`));
