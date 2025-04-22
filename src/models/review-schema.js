module.exports = (db) =>
  db.model(
    'Review',
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
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
      comment: {
        type: String,
        required: true,
      },
    })
  );