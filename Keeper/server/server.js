const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/noteDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useFindAndModify", false);

const noteSchema = new mongoose.Schema({
  id: String,
  title: String,
  content: String,
});


const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  notes: [noteSchema],
});

const User = new mongoose.model("User", userSchema);

app.post("/getNotes", function (req, res) {
  const username = req.body.username;
  User.findOne({ username: username }, (err, user) => {
    if (!err) {
      res.send(user.notes);
    } else {
      console.log(err);
    }
  });
});

app.post("/addNote", function (req, res) {
  const username = req.body.username;
  const note = {
    title: req.body.title,
    content: req.body.content,
  };
  console.log(note);

  User.findOneAndUpdate(
    { username: username },
    { $push: { notes: note } },
    (err, doc) => {
      if (!err) {
        console.log("Inserted " + doc);
      } else {
        console.log(err);
      }
    }
  );
});

app.post("/deleteNote", function (req, res) {
  const username = req.body.username;
  const id = req.body.id;
  console.log(id);

  const note = {
    _id: id,
  };

  User.findOneAndUpdate(
    { username: username },
    { $pull: { notes: note } },
    (err, doc) => {
      if (!err) {
          console.log(doc);
        console.log("Successfully deleted note!");
      } else {
        console.log(err);
      }
    }
  );
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username }, (err, foundUser) => {
    console.log(foundUser);
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          console.log("Succesfully logged in!");
          res.send(true);
        } else {
          res.send(false);
        }
      } else {
        console.log("didnt find user");
      }
    }
  });
});

app.listen(5000, function () {
  console.log("Server running on port 5000");
});
