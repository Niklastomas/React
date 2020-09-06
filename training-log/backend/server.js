const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const exerciseRouter = require("./routes/exerciseRoute");
const Exercise = require("./models/exerciseModel");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
app.use("/exercises", exerciseRouter);

mongoose.connect(config.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Succesfully connected to local database!");
});

app.listen(config.PORT, () => {
  console.log("Server is running on port " + config.PORT);
});
