const express = require("express");
const app = express();
const createError = require("http-errors");

// Port
const Port = process.env.PORT | 8080;

// Routes Requirements
const indexRoute = require("./routes/index");

// App Routes
app.use("/", indexRoute);

// Launch localhost
app.listen(Port, console.log(`runnig at localhost:${Port}`))