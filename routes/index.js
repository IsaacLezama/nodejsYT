const express = require("express");
const router = express.Router();
const myBookRouter = require("./book");

router.get('/', (req, res) => {
    // myEvent.emit("test-event", {name: `Isaac`});
    res.send('Hello world');
});

router.use('/book', myBookRouter);

router.all('/*', (req, res) => {
    res.send("Page not found");
});

module.exports = router;