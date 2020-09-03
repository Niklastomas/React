const express = require("express");
const router = express.Router();
const Exercise = require("../models/exerciseModel");


router.get("/", (req, res) => {
    Exercise.find((err, doc) => {
        if(!err) {
            res.send(doc);
            
        } else {
            console.log(err);
        }
    });
    
});

router.post("/add", (req, res) => {
    const newExercise = new Exercise({
        name: req.body.name,
        duration: req.body.duration,
        date: req.body.date,
        comment: req.body.comment

    });

    newExercise.save((err) => {
        if(!err){
            res.send("Successfully added the exercise!")
            console.log("Successfully added the exercise!");
        } else {
            res.send(err);
            console.log(err);
        }
    });
    
});

router.delete("/:id", (req, res) => {
    Exercise.findByIdAndDelete(req.params.id, (err, doc) => {
        if(!err){
            res.send("Successfully deleted " + doc);
            console.log("Successfully deleted " + doc);
        } else {
            res.send(err);
            console.log(err);
        }
    });
});

router.get("/:id", (req, res) => {
    Exercise.findById(req.params.id, (err, doc) => {
        if(!err) {
            res.send(doc);
        } else {
            res.send(err);
        }
    });
});

router.post("/update/:id", (req, res) => {
    Exercise.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        duration: req.body.duration,
        date: req.body.date,
        comment: req.body.comment

    }, (err, doc) => {
        if(!err) {
            res.send("Document updated!");
        } else {
            res.send(err)
        }
    });
});


module.exports = router;