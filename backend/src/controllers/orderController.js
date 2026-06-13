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

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("customerId", "name email city")
            .sort({
                createdAt: -1,
            });

        res.status(200).json({
            success: true,
            count: orders.length,
            data: orders,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate(
            "customerId",
            "name email city",
        );

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }

        res.status(200).json({
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
