const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    date: {
        type: String,
        requrired: [true, "Date is required"]
    },
    subject: {
        type: String,
        validate: {
            validator: (value) => value !== "",
            message: "Invalid subject"
          }
    },
    completed: Boolean
})

const Item = mongoose.model("Item", ItemSchema);

module.exports =  Item ; 