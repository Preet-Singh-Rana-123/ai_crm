const mongoose = require("mongoose");

const segmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        rules: {
            type: Object,
            required: true,
        },

        audienceSize: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Segment", segmentSchema);
