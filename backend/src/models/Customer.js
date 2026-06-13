const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },

        phone: {
            type: String,
            required: true,
        },

        city: {
            type: String,
            default: "",
        },

        totalSpent: {
            type: Number,
            default: 0,
        },

        orderCount: {
            type: Number,
            default: 0,
        },

        lastPurchaseDate: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Customer", customerSchema);
