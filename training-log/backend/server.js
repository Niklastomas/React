const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const bcrpyt = require("bcrypt");
const exerciseRouter = require("./routes/exerciseRoute");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
app.use("/exercises", exerciseRouter);

const saltRounds = 10;

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

const User = require("./models/userModel");

app.post("/login", (req, res) => {
  const user = req.body;
  User.findOne({ username: user.username }, (err, doc) => {
    if (err) {
      console.log(err);
    } else if (!doc) {
      res.send("Username does not exist!");
    } else {
      bcrpyt.compare(user.password, doc.password, (err, result) => {
        if (result) {
          const userInfo = {
            name: doc.username,
            id: doc._id,
          };
          res.send({ auth: "Authenticated", user: userInfo });
        } else {
          res.send("Wrong Password!");
        }
      });

     
    }
  });
});

app.post("/register", (req, res) => {
  const user = req.body;

  User.findOne({ username: user.username }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      if (doc) {
        console.log("Username exists!");
      } else {
        bcrpyt.hash(user.password, saltRounds, (err, hash) => {
          if (err) {
            console.log(err);
          } else {
            const newUser = new User({
              username: user.username,
              password: hash,
            });

            newUser.save((err) => {
              if (err) {
                console.log(err);
              } else {
                console.log("Added new User!");
              }
            });
          }
        });
      }
    }
  });
});

app.listen(config.PORT, () => {
  console.log("Server is running on port " + config.PORT);
});
