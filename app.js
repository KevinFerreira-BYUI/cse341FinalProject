const express = require("express");
const app = express();
const createError = require("http-errors");
const errMiddle = require("./middlewares/error");
const corsConfigs = require("./config/corsConfig");
const bodyParser = require("body-parser");

// Port
const Port = process.env.PORT | 8080;

// Data Base
require("./db/db");

// Body parser
app.use(bodyParser.json());

// Cors configuration Middleware
app.use(corsConfigs);

// Routes Requirements
const indexRoute = require("./routes/index");
const playersRoute = require("./routes/players");
const teamsRoute = require("./routes/teams");
const swaggerRoute = require("./routes/swagger");

// App Routes
app.use("/", indexRoute);
app.use("/players", playersRoute);
app.use("/teams", teamsRoute);
app.use("/api-docs", swaggerRoute);

// Launch localhost
app.listen(Port, console.log(`runnig at localhost:${Port}`))

// Route (page) not found
app.use(errMiddle.routeErrHandle);

// Global Error middleware
app.use(errMiddle.globalErrMiddleware);