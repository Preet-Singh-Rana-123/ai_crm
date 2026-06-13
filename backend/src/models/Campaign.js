const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        segmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Segment",
            required: true,
        },

        message: {
            type: String,
            required: true,
        },

        channel: {
            type: String,
            enum: ["EMAIL", "SMS", "WHATSAPP", "RCS"],
            required: true,
        },

        status: {
            type: String,
            enum: ["DRAFT", "SENDING", "SENT"],
            default: "DRAFT",
        },

        audienceSize: {
            type: Number,
            default: 0,
        },
        stats: {
            sent: {
                type: Number,
                default: 0,
            },

            delivered: {
                type: Number,
                default: 0,
            },

            failed: {
                type: Number,
                default: 0,
            },

            opened: {
                type: Number,
                default: 0,
            },

            clicked: {
                type: Number,
                default: 0,
            },
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Campaign", campaignSchema);
