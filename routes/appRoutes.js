const express = require('express')
const router = express.Router();

const {getAllLogs} = require('./../controllers/appController')


router
    .route('/')
    .get(getAllLogs)

module.exports = router