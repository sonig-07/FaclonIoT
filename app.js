const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/sensor", require("./routes/sensorRoutes"));

module.exports = app;