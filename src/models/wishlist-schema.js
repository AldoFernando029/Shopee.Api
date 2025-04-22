module.exports = (db) =>
  db.model(
    'wishlist',
    db.Schema({
      userId: {
        type: db.Schema.Types.ObjectId,
        ref: 'Auth',
        required: true,
      },
      productId: {
        type: db.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      dateAdded: {
        type: Date,
        default: Date.now,
      },
    })
)