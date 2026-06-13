const express = require("express");

const router = express.Router();

const {
    generateSegment,
    generateMessage,
    generateInsights,
    generateCampaignPlan,
    launchAgentCampaign,
} = require("../controllers/aiController");

router.post("/segment", generateSegment);

router.post("/message", generateMessage);

router.post("/insights", generateInsights);

router.post("/agent-plan", generateCampaignPlan);

router.post("/agent-launch", launchAgentCampaign);

module.exports = router;
