const axios = require("axios");

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

        simulateEvent(payload, "DELIVERED", 2000);

        simulateEvent(payload, "OPENED", 5000);

        simulateEvent(payload, "CLICKED", 8000);

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
