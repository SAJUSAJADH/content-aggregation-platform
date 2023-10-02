const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    notification1: String,
    notification2: String,
    notification3: String,
})

const Notification = mongoose.models.Notification || mongoose.model("Notification", notificationSchema)

module.exports = Notification;