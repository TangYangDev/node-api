/**
 * 通用业务模块
 * @author tangyang
 * @dateTime 2022-11-20
 */

const utilsService = {
    /**
     * [generateRandCode 生成区间数字]
     * @author tangyang
     * @dateTime 2022-11-20
     * @param {number} min
     * @param {number} max
     * @return {number}
     */
    generateRandCode(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
};

module.exports = utilsService;
