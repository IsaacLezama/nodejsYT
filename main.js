// const EventEmitter = require('events');
// const myEvent = new EventEmitter();

// myEvent.on('test-event', (data) => {
//     console.log('this event is listening');
//     console.log(data);
// });

const express = require('express');
const app = express();
const PORT = 3001;

const routes = require('./routes/index');

app.use(routes);



app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});