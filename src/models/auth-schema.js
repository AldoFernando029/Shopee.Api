module.exports = (db) =>
  db.model(
    'Auth',
    db.Schema({
      email: String,
      password: String,
      fullName: String,
      role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
      },
    })
  );      