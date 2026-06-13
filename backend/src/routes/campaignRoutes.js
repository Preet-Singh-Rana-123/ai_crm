const express = require("express");

const router = express.Router();

const {
    createCampaign,
    getCampaigns,
    getCampaignById,
} = require("../controllers/campaignController");

router.post("/", createCampaign);

router.get("/", getCampaigns);

router.get("/:id", getCampaignById);

module.exports = router;
