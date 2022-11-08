const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require('mongoose');
const item = require("./routes/item.js");
const index = require("./routes/index.js")
const app = express();

const url = "mongodb://localhost:27017/todoDB_v2";

mongoose.connect(url)
    .catch(err => {
        console.log(err);
        throw new Error('There was an error during db connection', err.message);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join( __dirname, '/public')));
app.use('/', index);
app.use('/items', item);

app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Started at 3000");
});