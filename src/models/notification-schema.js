module.exports = (db) =>
    db.model(
        "Notification",
        db.Schema({
            userId: {
                type: db.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
            message: {
                type: String,
                required: true,
            },
            isRead: {
                type: Boolean,
                default: false,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        })
    );