const Segment = require("../models/Segment");
const Customer = require("../models/Customer");

const buildSegmentQuery = require("../services/buildSegmentQuery");

const createSegment = async (req, res) => {
    try {
        const { name, rules } = req.body;

        const mongoQuery = buildSegmentQuery(rules);

        const audience = await Customer.find(mongoQuery);

        const segment = await Segment.create({
            name,
            rules,
            audienceSize: audience.length,
        });

        res.status(201).json({
            success: true,
            audienceSize: audience.length,
            data: segment,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getSegments = async (req, res) => {
    try {
        const segments = await Segment.find().sort({
            createdAt: -1,
        });

        res.json({
            success: true,
            data: segments,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getSegmentById = async (req, res) => {
    try {
        const segment = await Segment.findById(req.params.id);

        if (!segment) {
            return res.status(404).json({
                success: false,
                message: "Segment not found",
            });
        }

        res.json({
            success: true,
            data: segment,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getSegmentAudience = async (req, res) => {
    try {
        const segment = await Segment.findById(req.params.id);

        if (!segment) {
            return res.status(404).json({
                success: false,
                message: "Segment not found",
            });
        }

        const query = buildSegmentQuery(segment.rules);

        const audience = await Customer.find(query);

        res.json({
            success: true,
            count: audience.length,
            data: audience,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createSegment,
    getSegments,
    getSegmentById,
    getSegmentAudience,
};
