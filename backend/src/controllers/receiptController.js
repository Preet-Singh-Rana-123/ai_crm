const Campaign = require("../models/Campaign");

const Communication = require("../models/Communication");

const receiveReceipt = async (req, res) => {
    try {
        const { campaignId, customerId, status } = req.body;

        await Communication.create({
            campaignId,

            customerId,

            status,
        });

        const campaign = await Campaign.findById(campaignId);

        if (campaign) {
            switch (status) {
                case "DELIVERED":
                    campaign.stats.delivered++;
                    break;

                case "OPENED":
                    campaign.stats.opened++;
                    break;

                case "CLICKED":
                    campaign.stats.clicked++;
                    break;
            }

            await campaign.save();
        }

        res.json({
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            success: false,

            message: error.message,
        });
    }
};

module.exports = {
    receiveReceipt,
};
