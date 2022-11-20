/**
 * 用户登录验证模块
 * @author tangyang
 * @dateTime 2022-11-20
 */

const NSIUtil = require('../utils/index');

const validatePhoneCode = [];
const phoneIsReceived = (phone, itemSet) => {
    for (const item of itemSet) {
        if (phone === item.phone) return true;
    }
    return false;
};

// 验证码发送接口
sendCode = (req, res) => {
    const phone = req.query.phone;
    if (phoneIsReceived(phone, validatePhoneCode)) {
        res.send({
            code: 400,
            meg: '已经发送过验证码，请稍后再发'
        });
        return;
    }
    const code = NSIUtil.generateRandCode(1000, 9999);

    validatePhoneCode.push({
        phone,
        code
    });
    console.log(validatePhoneCode);
    res.send({
        code: 200,
        msg: '发送成功'
    });
    console.log(code);
};

module.exports = {
    sendCode
};
