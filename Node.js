/*
WEB322 Lab 2 GitHub & Cyclic
Author: Stanislav Chirikov
Student ID 074631128
*/

var HTTP_PORT = process.env.PORT || 3000;

var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.send(`<h1 style='color: #000000;'>Hello WEB322!</h1>`);
});

const server = app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});
