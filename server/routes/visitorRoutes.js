const express = require("express");
const router = express.Router();
const Visitor = require("../models/Visitor");

router.post("/", async (req, res) => {
  try {
    // ✅ Get IP Address (including proxies)
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(",")[0].trim() : req.connection.remoteAddress;

    // ✅ Get User Agent
    const userAgent = req.get("User-Agent") || "Unknown";

    // ✅ Current Timestamp
    const visitedAt = new Date();

    // ✅ Save visitor info
    const visitor = new Visitor({ ip, userAgent, visitedAt });
    await visitor.save();

    res.status(200).json({ success: true, message: "Visitor tracked." });
  } catch (err) {
    console.error("❌ Error saving visitor:", err);
    res.status(500).json({ success: false, error: "Failed to track visitor." });
  }
});

module.exports = router;
