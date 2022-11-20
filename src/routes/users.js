var express = require('express');
var router = express.Router();

const loginValidate = require('../service/loginValidate');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/sendCode', loginValidate.sendCode);
router.post('/sendCode', loginValidate.sendCode);

module.exports = router;
