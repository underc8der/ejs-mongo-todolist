const mongoose = require("mongoose");
const ItemSchema = require("./item.js");

mongoose.Schema({
    date: {
        type: Date,
        requrired: [true, "Date is required"]
    },
    items: [String]
})