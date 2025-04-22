module.exports = (db) =>
    db.model(
        'Discount',
        db.Schema({
            code: {
                type: String,
                required: true,
            },
            percentage: {
                type: Number,
                required: true,
            },
            expirationDate: {
                type: Date,
                required: true,
            },
        })
    );