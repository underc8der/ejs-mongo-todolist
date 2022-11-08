const express = require('express');
const router = express.Router();
const { insertItem, retrieveItem, updateItem } = require("../service/itemService.js");


router.get("/", async function (req, res) {
    let response = { 
        day: new Date().toLocaleDateString("en-US", 
        {
            weekday: "long",
            day: "numeric",
            month: "long"
        }),
        items: await retrieveItem()
    };
    res.render("list", response)
});

router.post("/", async function (req, res) {
    await insertItem(req.body.item);
    res.redirect("/items");
});

router.post("/update", function (req, res) {
    console.log(" body: " + JSON.stringify(req.body));
    updateItem(req.body.hiddenItemId, req.body.hiddenItemCompleted)
    res.redirect("/items");
});

module.exports = router;