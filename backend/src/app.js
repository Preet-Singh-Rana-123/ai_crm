const express = require("express");
const cors = require("cors");

const customerRoutes = require("./routes/customerRoutes");

const app = express();

app.use(cors({ credentials: true }));

app.use(express.json());

app.use("/api/customers", customerRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "SmartReach CRM API Running",
    });
});

module.exports = app;
