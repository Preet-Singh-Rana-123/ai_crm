const express = require("express");
const cors = require("cors");

const channelRoutes = require("./routes/channelRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/channel", channelRoutes);

module.exports = app;
