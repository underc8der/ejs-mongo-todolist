const Item = require("../model/item.js");

module.exports.insertItem = async function(subject) {
    const item = new Item({
        date: getDate(),
        subject: subject,
        completed: false
    });
    try {
        await item.save();
    } catch(err) {
        console.log("There was an error saving document: " + err.message);
    }
}

module.exports.retrieveItem = async function() {
    const items = await Item.find({ date: getDate() });
    return items;
} 

module.exports.updateItem = function(id, completed) {
    Item.findByIdAndUpdate(id, { completed: completed === "false" ? true: false })
        .catch(err => console.log(err));
}


function getDate() {
    return new Date().toLocaleDateString()
}