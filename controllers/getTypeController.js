const dbConfig = require('../util/dbConfig');
// 获取分类
const getType = (req, res) => {
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

const getCate = (req, res) => {
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
    getType,
    getCate
};
