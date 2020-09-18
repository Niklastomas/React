const express = require("express");
const router = express.Router();
const User = require("./userModel");



router.post("/update/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);

    User.findOneAndUpdate({googleId: req.params.id}, {notes: req.body}, (err, doc) =>{
        if(err){
            console.log(err);
        } else {
            console.log("Succesfully updated: " + doc);
            res.send(doc.notes);
        }
    });
});

router.get("/:id", (req, res) => {

    const id = req.params.id;

    User.findOne({googleId: id}, (err, doc) => {
        if(err) {
            console.log(err);
        } else {
            if(doc){
                res.send(doc.notes);
            } else {
                console.log("No docs!");
            }
            
        }
    });
    
});

module.exports = router;