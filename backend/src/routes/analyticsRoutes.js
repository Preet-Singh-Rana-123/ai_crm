const express = require("express");

const router = express.Router();

const { getCampaignAnalytics } = require("../controllers/analyticsController");

router.get("/campaign/:id", getCampaignAnalytics);

router.get("/overview", getOverallAnalytics);

module.exports = router;
