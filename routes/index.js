const express = require("express");
const router = express.Router();
const myBookRouter = require("./book");
const path = require("path");

router.get('/', (req, res) => {
    // myEvent.emit("test-event", {name: `Isaac`});
    // res.sendFile( path.join(__dirname, '/../page/home.html'), {name: 'Isaac'});
    // res.render( path.join(__dirname, '/../page/home'), {name: 'Isaac'});
    res.render("index", {name: 'Isaac'});
});

router.use('/book', myBookRouter);

router.all('/*', (req, res) => {
    // res.send("Page not found");
    res.sendFile( path.join(__dirname, '/../page/404.html'));
});

module.exports = router;