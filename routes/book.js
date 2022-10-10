const express = require("express");
const myBookRouter = express.Router();


myBookRouter
.route("/")
.get( (req, res) => {
    res.send("All books");
})
.post( (req, res) => {
    res.json({ data: "Book is stored"});
});

myBookRouter.get('/:id', (req, res) => {
    res.send(`Single book of ID: ${req.params.id}`);
});

module.exports = myBookRouter;