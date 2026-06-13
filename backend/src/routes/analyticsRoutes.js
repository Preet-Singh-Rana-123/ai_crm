const express = require("express");

const router = express.Router();

const { getCampaignAnalytics } = require("../controllers/analyticsController");

router.get("/campaign/:id", getCampaignAnalytics);

module.exports = router;
