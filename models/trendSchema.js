const mongoose = require("mongoose");

const trendSchema = new mongoose.Schema({
    trend1: String,
    trend2: String,
    trend3: String,
    trend4: String,
    trend5: String,
    trend6: String,
})

const Trend = mongoose.models.Trend || mongoose.model("Trend", trendSchema)

module.exports = Trend;