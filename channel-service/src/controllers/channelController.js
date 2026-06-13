const axios = require("axios");

const getRandomStatus = () => {
    const statuses = ["DELIVERED", "FAILED"];

    return statuses[Math.floor(Math.random() * statuses.length)];
};

const simulateEvent = async (payload, status, delay) => {
    setTimeout(async () => {
        try {
            await axios.post(process.env.CRM_CALLBACK_URL, {
                ...payload,
                status,
            });

            console.log(`${status} callback sent`);
        } catch (error) {
            console.log(error.message);
        }
    }, delay);
};

const sendMessage = async (req, res) => {
    try {
        const payload = req.body;

        const firstStatus = getRandomStatus();

        simulateEvent(payload, firstStatus, 2000);

        if (firstStatus === "DELIVERED") {
            simulateEvent(payload, "OPENED", 5000);

            simulateEvent(payload, "CLICKED", 8000);
        }

        res.json({
            success: true,

            message: "Message queued",
        });
    } catch (error) {
        res.status(500).json({
            success: false,

            message: error.message,
        });
    }
};

module.exports = {
    sendMessage,
};
