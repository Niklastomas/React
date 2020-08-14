const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/noteDB', {useNewUrlParser: true});



const noteSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String
});

const Note = mongoose.model("Note", noteSchema);



app.get("/getNotes", function(req, res){
    Note.find(function(err, notes){
        if(!err){
            res.send(notes);
        } else {
            console.log(err);
        }
    })
});



app.post("/addNote", function(req, res){

    const note = new Note({
        title: req.body.title,
        content: req.body.content
    }); 
        
    note.save(function(err){
        if(!err){
            console.log("Succesfully inserted the document into the database!");
        } else {
            console.log(err);
        }
    });
});

app.post("/deleteNote", function(req, res){
    
    // Note.deleteOne({_id: req.body._id}, function(err){
    //     if(!err){
    //         console.log("Succesfully deleted the document!");
    //     } else {
    //         console.log(err);
    //     }
    // })
    Note.findByIdAndDelete(req.body._id, function(err){
        if(!err){
            console.log("Succesfully deleted the document!");
        } else {
            console.log(err);
        }
    });
});

app.listen(5000, function(){
    console.log("Server running on port 5000");
});