const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

const noteRoute = require("./noteRoute");
const loginRoute = require("./loginRoute");
app.use("/notes", noteRoute);
app.use("/login", loginRoute);

mongoose.connect(process.env.MONGO_DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useFindAndModify", false);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("Server running on port " + PORT);
});
