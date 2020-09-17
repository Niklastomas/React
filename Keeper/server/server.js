const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

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

app.post("/add/:id", (req, res) => {
  const body = req.body;
  const id = req.params.id;
  console.log(body);
  console.log(id);

  // User.findOneAndUpdate({googleId: id}, {notes: note}, (err, doc) =>{
  //     if(err){
  //         console.log(err);
  //     } else {
  //         console.log("Succesfully updated: " + doc);
  //     }
  // });
});

// const noteSchema = new mongoose.Schema({
//   id: String,
//   title: String,
//   content: String,
// });


// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   notes: [noteSchema],
// });

// const User = new mongoose.model("User", userSchema);

app.post("/hej/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
});

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

// app.post("/login", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   User.findOne({ username: username }, (err, foundUser) => {
//     console.log(foundUser);
//     if (err) {
//       console.log(err);
//     } else {
//       if (foundUser) {
//         if (foundUser.password === password) {
//           console.log("Succesfully logged in!");
//           res.send(true);
//         } else {
//           res.send(false);
//         }
//       } else {
//         console.log("didnt find user");
//       }
//     }
//   });
// });

app.listen(5000, function () {
  console.log("Server running on port 5000");
});
