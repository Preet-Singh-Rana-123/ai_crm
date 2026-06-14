const Campaign = require("../models/Campaign");

const getOverallAnalytics = async (req, res) => {
    try {
        const campaigns = await Campaign.find();

        let sent = 0;
        let delivered = 0;
        let opened = 0;
        let clicked = 0;
        let failed = 0;

        campaigns.forEach((campaign) => {
            sent += campaign.stats.sent;

            delivered += campaign.stats.delivered;

            opened += campaign.stats.opened;

            clicked += campaign.stats.clicked;

            failed += campaign.stats.failed;
        });

        res.json({
            success: true,

            sent,

            delivered,

            opened,

            clicked,

            failed,
        });
    } catch (error) {
        res.status(500).json({
            success: false,

            message: error.message,
        });
    }
};

const getCampaignAnalytics = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);

        if (!campaign) {
            return res.status(404).json({
                success: false,
                message: "Campaign not found",
            });
        }

        const stats = campaign.stats;

        const deliveryRate = stats.sent
            ? (stats.delivered / stats.sent) * 100
            : 0;

        const openRate = stats.delivered
            ? (stats.opened / stats.delivered) * 100
            : 0;

        const clickRate = stats.opened
            ? (stats.clicked / stats.opened) * 100
            : 0;

        res.json({
            success: true,

            campaignName: campaign.name,

            stats,

            deliveryRate: deliveryRate.toFixed(2),

            openRate: openRate.toFixed(2),

            clickRate: clickRate.toFixed(2),
        });
    } catch (error) {
        res.status(500).json({
            success: false,

            message: error.message,
        });
    }
};

module.exports = {
    getCampaignAnalytics,
    getOverallAnalytics,
};
