const express = require('express');
const stockController = require('../controllers/stockController');
const router = express.Router();

router.post('/insert',stockController.insert);
router.post('/send',stockController.send);
module.exports = router;