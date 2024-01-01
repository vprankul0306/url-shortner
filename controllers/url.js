const { nanoid } = require("nanoid");
const URL = require("../models/url");

const handleGenerateNewShortUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ message: "url is required" });
  }

  const shortId = nanoid(8);

  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
  });
  res.json({ id: shortId });
};

const handleRedirectUrl = async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    { $push: { visitedHistory: { timestamp: Date.now() } } }
  );

  res.redirect(entry.redirectUrl);
};

const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortId;

  const result = await URL.findOne({ shortId });
  res.json({
    totalClick: result.visitedHistory.length,
    analytics: result.visitedHistory,
  });
};

module.exports = {
  handleGenerateNewShortUrl,
  handleRedirectUrl,
  handleGetAnalytics,
};
