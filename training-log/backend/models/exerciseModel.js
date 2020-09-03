const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
    name: String,
    duration: String,
    date: {
        type: Date,
        default: Date.now()
    },
    comment: String
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;