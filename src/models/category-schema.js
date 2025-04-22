module.exports = (db) =>
    db.model(
        'Category',
        db.Schema({
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            imageUrl: {
                type: String,
                required: true,
            },
        })
    );