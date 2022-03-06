const express = require('express')
const router = express.Router();
const appController = require('./../controllers/appController')

// Functions:
// Login
// Logout
// Start a task
// 
// 
router
    .route('/')
    .get(appController.getAllLogs)

router
    .route('/start-task')
    .post(appController.startATask)
router
    .route('/end-task')
    .patch(appController.endTask)

module.exports = router