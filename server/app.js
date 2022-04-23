//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO

app.get("/", function(req, res){
    res.send("Server is working fine!")
})

app.listen(5000, function() {
  console.log("Server started on port 5000");
});