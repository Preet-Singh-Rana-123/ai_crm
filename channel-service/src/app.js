const express = require("express");
const cors = require("cors");

const channelRoutes = require("./routes/channelRoutes");

const app = express();

const allowedOrigins = [
    "http://localhost:5173",
    "https://ai-crm-frontend-amyj.onrender.com",
    "https://ai-crm-backend-72h2.onrender.com/api/receipts",
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true);

            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Blocked by CORS policy"));
            }
        },
        credentials: true,
    }),
);

app.use(express.json());

app.use("/api/channel", channelRoutes);

module.exports = app;
