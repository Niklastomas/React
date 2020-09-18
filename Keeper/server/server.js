const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

const noteRoute = require("./noteRoute");
const loginRoute = require("./loginRoute");
app.use("/notes", noteRoute);
app.use("/login", loginRoute);

mongoose.connect("mongodb://localhost:27017/noteDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useFindAndModify", false);

app.listen(5000, function () {
  console.log("Server running on port 5000");
});
