module.exports = (db) =>
    db.model(
        'product',
        db.Schema({
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            categoryId: {
                type: String,
                required: true,
            },
            imageUrl: {
                type: String,
                required: true,
            },
            stockQuantity: {
                type: Number,
                required: true,
            },
        })
    );