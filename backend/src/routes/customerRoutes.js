const express = require("express");

const router = express.Router();

const {
    createCustomer,
    getCustomers,
    getCustomerById,
    deleteCustomer,
} = require("../controllers/customerController");

router.post("/", createCustomer);

router.get("/", getCustomers);

router.get("/:id", getCustomerById);

router.delete("/:id", deleteCustomer);

module.exports = router;
