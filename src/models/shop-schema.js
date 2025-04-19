modeul.exports = (db) =>
    db.model(
        'Shop',
        db.Schema({
            name: {
                type: String,
                required: true,
            },
            location: {
                type: String,
                required: true,
            },
            ownerId: {
                type: String,
                required: true,
            },
            products: [
                {
                    productId: {
                        type: String,
                        required: true,
                    },
                    quantity: {
                        type: Number,
                        required: true,
                    },
                },
            ],
        })
    );