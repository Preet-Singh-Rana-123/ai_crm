const Order = require("../models/Order");
const Customer = require("../models/Customer");

const createOrder = async (req, res) => {
    try {
        const { customerId, amount, products, orderDate } = req.body;

        const customer = await Customer.findById(customerId);

        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found",
            });
        }

        const order = await Order.create({
            customerId,
            amount,
            products,
            orderDate,
        });

        customer.totalSpent += amount;

        customer.orderCount += 1;

        customer.lastPurchaseDate = orderDate || new Date();

        await customer.save();

        res.status(201).json({
            success: true,
            data: order,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
