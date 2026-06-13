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
