/**
 * 通用方法模块
 * @author tangyang
 * @dateTime 2022-11-20
 */

const utilsFunction = {
    /**
     * [isArray 是否为数组]
     * @author tangyang
     * @dateTime 2022-11-20
     * @param {any} o
     * @returns {boolean}
     */
    isArray(o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    },
    /**
     * [isArray 是否为数组]
     * @author tangyang
     * @dateTime 2022-11-20
     * @param {Array<T>} arr
     * @param {T} item
     * @returns {boolean}
     */
    arrayOfItemIsExist(arr, item) {
        if (!this.isArray(arr)) return false;
        return arr.indexOf(item) > -1 ? true : false;
    }
};

module.exports = utilsFunction;
