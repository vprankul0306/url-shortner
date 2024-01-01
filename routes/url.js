const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShortUrl,
  handleRedirectUrl,
  handleGetAnalytics,
} = require("../controllers/url");

router.post("/url", handleGenerateNewShortUrl);
router.get("/:shortId", handleRedirectUrl);
router.get("/url/analytics/:shortId", handleGetAnalytics);

module.exports = router;
