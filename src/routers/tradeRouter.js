const express = require('express');
const tradeRealController = require('../controllers/tradeRealController');
const router = express.Router();


router.get('/', tradeRealController.getTradeReader);

module.exports = router;