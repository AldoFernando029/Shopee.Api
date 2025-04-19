const notificationService = require('./notification-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getNotifications(req, res, next) {
  try {
    const userId = req.params.userId;
    const notifications = await notificationService.getNotifications(userId);
    res.json(notifications);
  } catch (error) {
    next(error);
  }
}

async function markAsRead(req, res, next) {
  try {
    const notifId = req.params.id;
    const result = await notificationService.markAsRead(notifId);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

async function deleteNotification(req, res, next) {
  try {
    const notifId = req.params.id;
    await notificationService.deleteNotification(notifId);
    res.json({ message: 'Notification deleted' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getNotifications,
  markAsRead,
  deleteNotification,
};

