const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require('mongoose');
const Item = require("./model/item.js");

const url = "mongodb://localhost:27017/todoDB_v2";
mongoose.connect(url);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join( __dirname, '/public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", async function (req, res) {
    let response = { 
        day: new Date().toLocaleDateString("en-US", 
        {
            weekday: "long",
            day: "numeric",
            month: "long"
        }),
        items: await findItems(getDate())
    };
    res.render("list", response);
});

app.post("/", async function (req, res) {
    await insertOne(req.body.item);
    res.redirect("/");
});

app.patch("/items/:id", async function (req, res) {
    var id = req.params.id;
    await Item.updateOne({ id: id }, {completed: completed});
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Started at 3000");
});

function getDate() {
    return new Date().toLocaleDateString()
}

async function findItems(date) {
    //await mongoose.connect(url);
    console.log("actual date param: " + date);
    const items = await Item.find({ date: date });
    return items;
} 

async function insertOne(subject) {
    //await mongoose.connect(url);
    console.log("actual item param: " + subject);
    const item = new Item({
        date: getDate(),
        subject: subject,
        completed: false
    });
    item.save().catch(err => console.log(err.message));
}