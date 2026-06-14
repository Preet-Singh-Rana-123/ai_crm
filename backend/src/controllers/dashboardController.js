const Customer = require("../models/Customer");
const Campaign = require("../models/Campaign");
const Order = require("../models/Order");

const getDashboardStats = async (req, res) => {
    try {
        const totalCustomers = await Customer.countDocuments();

        const totalOrders = await Order.countDocuments();

        const totalCampaigns = await Campaign.countDocuments();

        const revenue = await Order.aggregate([
            {
                $group: {
                    _id: null,
                    totalRevenue: {
                        $sum: "$amount",
                    },
                },
            },
        ]);

        res.json({
            success: true,

            totalCustomers,

            totalOrders,

            totalRevenue: revenue[0]?.totalRevenue || 0,

            totalCampaigns,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getDashboardStats,
};
