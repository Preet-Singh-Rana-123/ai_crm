const express = require("express");

const router = express.Router();

const {
    createSegment,
    getSegments,
    getSegmentById,
    getSegmentAudience,
} = require("../controllers/segmentController");

router.post("/", createSegment);

router.get("/", getSegments);

router.get("/:id", getSegmentById);

router.get("/:id/audience", getSegmentAudience);

module.exports = router;
