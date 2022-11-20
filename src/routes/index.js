var express = require('express');
var router = express.Router();

const { getTableQuery, getConditionQuery } = require('../service/query');

/* GET home page. */
router.get('/', getTableQuery);
router.get('/v1/list', getConditionQuery);

module.exports = router;
