"use strict"

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");


//routing
const home = require("./src/routes/home");

//App setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); // what is this for exactly?
app.use(bodyParser.json()); // what is this for exactly? if you want to get req.body
                            // you need this one. Otherwise, you will get 
app.use(bodyParser.urlencoded({extended: true})); // what is this for exactly?
// I think this does the same thing with bodyParser.json(). I think I should ask ChatGPT this though.

app.use("/", home); //middleWare - find the matching request in home directory

module.exports = app;

