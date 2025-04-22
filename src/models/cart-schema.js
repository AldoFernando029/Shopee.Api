module.exports = (db) =>
    db.model(
        'Cart',
        db.Schema({
            userId: {
                type: db.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            items: [
                {
                    productId: {
                        type: db.Schema.Types.ObjectId,
                        ref: 'Product',
                        required: true,
                    },
                    quantity: {
                        type: Number,
                        required: true,
                    },
                },
            ],
            totalPrice: {
                type: Number,
                required: true,
            },
        })
    );