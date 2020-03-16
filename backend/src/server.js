const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const routes = require('./routes');

const port = process.env.PORT || 3339;
const App = express();

mongoose.connect('mongodb+srv://hacka-pocket:hacka-pocket@cluster0-sws4w.mongodb.net/hacka-pocket?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

App.use(cors());
App.use(express.json());
App.use(routes);

App.listen(port);
console.log(`server on: localhost:${port}`);
