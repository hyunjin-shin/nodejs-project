"use strict"

const express = require("express");
const app = express();
const path = require("path");


//routing
const home = require("./src/routes/home");

//App setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); //middleWare

module.exports = app;
