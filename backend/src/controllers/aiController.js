const model = require("../services/aiService");
const Customer = require("../models/Customer");
const buildSegmentQuery = require("../services/buildSegmentQuery");
const Segment = require("../models/Segment");
const Campaign = require("../models/Campaign");

const launchAgentCampaign = async (req, res) => {
    try {
        const {
            campaignName,

            segment,

            channel,

            message,
        } = req.body;

        const query = buildSegmentQuery(segment);

        const audience = await Customer.find(query);

        const savedSegment = await Segment.create({
            name: campaignName + " Segment",

            rules: segment,

            audienceSize: audience.length,
        });

        const campaign = await Campaign.create({
            name: campaignName,

            segmentId: savedSegment._id,

            channel,

            message,

            audienceSize: audience.length,
        });

        res.json({
            success: true,

            campaign,
        });
    } catch (error) {
        res.status(500).json({
            success: false,

            message: error.message,
        });
    }
};

const generateCampaignPlan = async (req, res) => {
    try {
        const { goal } = req.body;

        const result = await model.generateContent(
            `
You are a CRM campaign planner.

Return ONLY JSON.

Format:

{
  "segment": {
     "conditions":[]
  },

  "channel":"EMAIL",

  "campaignName":"",

  "message":""
}

Goal:

${goal}
`,
        );

        const response = result.response.text();

        const cleaned = response
            .replace("```json", "")
            .replace("```", "")
            .trim();

        const plan = JSON.parse(cleaned);

        const query = buildSegmentQuery(plan.segment);

        const audience = await Customer.find(query);

        res.json({
            success: true,

            plan,

            audienceSize: audience.length,
        });
    } catch (error) {
        res.status(500).json({
            success: false,

            message: error.message,
        });
    }
};

const generateSegment = async (req, res) => {
    try {
        const { prompt } = req.body;

        const result = await model.generateContent(
            `
Convert the marketer request
into JSON.

Supported fields:

totalSpent
orderCount
city

Supported operators:

>
<
=
>=
<=

Return ONLY valid JSON.

Example:

{
 "conditions":[
   {
     "field":"totalSpent",
     "operator":">",
     "value":5000
   }
 ]
}

Request:

${prompt}
`,
        );

        const response = result.response.text();

        res.json({
            success: true,
            data: response,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const generateMessage = async (req, res) => {
    try {
        const { campaignGoal } = req.body;

        const result = await model.generateContent(
            `
You are a marketing expert.

Write a short campaign message.

Goal:
${campaignGoal}

Requirements:

Personalized

Friendly

Under 50 words

Include {{name}}
`,
        );

        const response = result.response.text();

        res.json({
            success: true,

            message: response,
        });
    } catch (error) {
        res.status(500).json({
            success: false,

            message: error.message,
        });
    }
};

const generateInsights = async (req, res) => {
    try {
        const stats = req.body;

        const result = await model.generateContent(
            `
You are a CRM analyst.

Analyze:

${JSON.stringify(stats)}

Provide:

1. Performance Summary

2. What worked

3. What didn't

4. Recommendations

Keep response concise.
`,
        );

        const response = result.response.text();

        res.json({
            success: true,

            insights: response,
        });
    } catch (error) {
        res.status(500).json({
            success: false,

            message: error.message,
        });
    }
};

module.exports = {
    generateSegment,
    generateMessage,
    generateInsights,
    generateCampaignPlan,
    launchAgentCampaign,
};
