const express = require('express');
const app = express();

const userModel = require("./models/user");

app.get("/", function(req, res) {
    res.send("Home is Working");
})

app.get("/createmany", function(req, res) {
    res.send("cratemany working");
});

app.listen(3000);