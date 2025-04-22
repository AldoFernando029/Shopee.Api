const notifRepo = require('./notification-repository');

async function getNotifications(userId) {
  return await notifRepo.findByUserId(userId);
}

async function markAsRead(id) {
  const notif = await notifRepo.findById(id);
  if (!notif) return null;
  return await notifRepo.update(notif, { isRead: true });
}

async function deleteNotification(id) {
  return await notifRepo.destroy(id);
}

module.exports = {
  getNotifications,
  markAsRead,
  deleteNotification,
};
