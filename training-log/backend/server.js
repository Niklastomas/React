const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const exerciseRouter = require("./routes/exerciseRoute");
const passport = require("passport");
const session = require("express-session");
var GoogleStrategy = require('passport-google-oauth20').Strategy;



const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
app.use("/exercises", exerciseRouter);



app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());



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

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.post("/login", (req, res) => {
  const user = req.body;
  User.findOne({username: user.username}, (err, doc) => {
    if(err){
      console.log(err);
    }else if(!doc) {
      res.send("Username does not exist!");
    } else {
      
      if(user.password === doc.password){
        const userInfo = {
          name: doc.username,
          id: doc._id
        }
        res.send({auth:"Authenticated", user:userInfo});
      } else {
        res.send("Wrong Password!");
      }
    }
  });
});


app.post("/register", (req, res) => {
  
  const user = req.body;

  User.findOne({username: user.username}, (err, doc) => {
    if(err){
      console.log(err);
    } else {
      if(doc){
        console.log("Username exists!");
      } else {
        const newUser = new User(user);
        newUser.save(err  => {
          if(err){
            console.log(err);
          } else {
            console.log("Added new User!");
          }
        });
        
      }
    }
  });
});



app.listen(config.PORT, () => {
  console.log("Server is running on port " + config.PORT);
});
