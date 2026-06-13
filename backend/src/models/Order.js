const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true,
        },

        amount: {
            type: Number,
            required: true,
            min: 0,
        },

        products: {
            type: [String],
            default: [],
        },

        orderDate: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Order", orderSchema);
