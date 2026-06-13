const mongoose = require("mongoose");

const communicationSchema = new mongoose.Schema(
    {
        campaignId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Campaign",
        },

        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
        },

        channel: String,

        status: {
            type: String,
            default: "PENDING",
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Communication", communicationSchema);
