module.exports = (db) =>
    db.model(
        'order',
        db.Schema({
            userId: {
                type: String,
                required: true,
            },
            productId: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            totalPrice: {
                type: Number,
                required: true,
            },
            status: {
                type: String,
                enum: ['pending', 'completed', 'cancelled'],
                default: 'pending',
            },
        })
    );