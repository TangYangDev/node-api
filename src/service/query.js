/**
 * SQL查询接口模块
 * @author tangyang
 * @dateTime 2022-11-19
 */
const dbConfig = require('../configs/dbConfig');
// 获取分类
const getTableQuery = (req, res) => {
    const sql = 'select *from basic_info';
    const sqlArr = [];
    const callback = (err, data) => {
        if (err) {
            console.error('查询失败');
        } else {
            res.send({
                list: data
            });
        }
    };
    dbConfig.sqlConnet(sql, sqlArr, callback);
};

const getConditionQuery = (req, res) => {
    const { id } = req.query;
    const sql = `select *from post where id = ?`;
    const sqlArr = [id];
    const callback = (err, data) => {
        if (err) {
            console.error('查询失败');
        } else {
            res.send({
                list: data
            });
        }
    };
    dbConfig.sqlConnet(sql, sqlArr, callback);
};

module.exports = {
    getTableQuery,
    getConditionQuery
};
