/**
 * util工具类导出模块 NSI Network Service Interface  网络服务接口的简写
 * @author tangyang
 * @dateTime 2022-11-20
 */

const utilsFunction = require('./utilsFunction');
const utilsService = require('./utilsService');

const NSIUtil = {
    ...utilsFunction,
    ...utilsService
};

module.exports = NSIUtil;
