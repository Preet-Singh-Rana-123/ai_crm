const Campaign = require("../models/Campaign");

const Segment = require("../models/Segment");

const Customer = require("../models/Customer");

const Communication = require("../models/Communication");

const buildSegmentQuery = require("../services/buildSegmentQuery");

const createCampaign = async (req, res) => {
    try {
        const { name, segmentId, message, channel } = req.body;

        const segment = await Segment.findById(segmentId);

        if (!segment) {
            return res.status(404).json({
                success: false,
                message: "Segment not found",
            });
        }

        const query = buildSegmentQuery(segment.rules);

        const audience = await Customer.find(query);

        const campaign = await Campaign.create({
            name,

            segmentId,

            message,

            channel,

            audienceSize: audience.length,
        });

        res.status(201).json({
            success: true,

            data: campaign,
        });
    } catch (error) {
        res.status(500).json({
            success: false,

            message: error.message,
        });
    }
};

const getCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find()
            .populate("segmentId", "name")
            .sort({
                createdAt: -1,
            });

        res.json({
            success: true,
            data: campaigns,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getCampaignById = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id).populate(
            "segmentId",
        );

        if (!campaign) {
            return res.status(404).json({
                success: false,
                message: "Campaign not found",
            });
        }

        res.json({
            success: true,
            data: campaign,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createCampaign,
    getCampaigns,
    getCampaignById,
};
