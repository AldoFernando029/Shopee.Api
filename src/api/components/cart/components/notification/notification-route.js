const express = require('express');
const router = express.Router();
const notificationController = require('./notification-controller');

module.exports = (app) => {
    app.use('/api/notifications', router);

router.get('/:userId', notificationController.getNotifications);
router.put('/:id/read', notificationController.markAsRead);
router.delete('/:id', notificationController.deleteNotification);
};
