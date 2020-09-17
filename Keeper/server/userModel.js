const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: String,
    content: String
});

const userScehma = new mongoose.Schema({
    googleId: String,
    notes: [noteSchema]

});

const User = new mongoose.model("User", userScehma);

module.exports = User;