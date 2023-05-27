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
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home); //middleWare

module.exports = app;

