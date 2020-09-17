const express = require("express");
const router = express.Router();

const User = require("./userModel");

router.post("/:googleId", (req, res) => {
    const googleId = req.params.googleId;

    User.findOne({googleId: googleId}, (err, doc) => {
        if(err){
            console.log(err);
            
        } else {
            if(doc){
                console.log("User exists!");
            } else {
                const newUser = new User({
                    googleId: googleId,
                    notes: []
                });

                newUser.save();
            }
        }
    });
});

module.exports = router;