const Customer = require("../models/Customer");

const createCustomer = async (req, res) => {
    try {
        const { name, email, phone, city } = req.body;

        const existingCustomer = await Customer.findOne({ email });

        if (existingCustomer) {
            return res.status(400).json({
                success: false,
                message: "Customer already exists",
            });
        }

        const customer = await Customer.create({
            name,
            email,
            phone,
            city,
        });

        res.status(201).json({
            success: true,
            data: customer,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find().sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            count: customers.length,
            data: customers,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);

        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found",
            });
        }

        res.status(200).json({
            success: true,
            data: customer,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);

        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found",
            });
        }

        await customer.deleteOne();

        res.status(200).json({
            success: true,
            message: "Customer deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createCustomer,
    getCustomers,
    getCustomerById,
    deleteCustomer,
};
