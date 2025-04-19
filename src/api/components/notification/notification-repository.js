const {notification} = require('../../../models');

async function findByUserId(userId) {
  return await db.Notification.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']],
  });
}

async function findById(id) {
  return await db.Notification.findByPk(id);
}

async function update(notif, data) {
  return await notif.update(data);
}

async function destroy(id) {
  return await db.Notification.destroy({ where: { id } });
}

module.exports = {
  findByUserId,
  findById,
  update,
  destroy,
};
