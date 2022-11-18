var express = require('express');
var router = express.Router();

const { getType, getCate } = require('../controllers/getTypeController');

/* GET home page. */
router.get('/', getType);
router.get('/v1/list', getCate);

module.exports = router;
