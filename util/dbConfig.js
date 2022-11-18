const mysql = require('mysql');

module.exports = {
    //数据库配置
    config: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'Cdsf@119',
        database: 'app'
    },

    //连接数据库，使用mysql的连接池方式
    //连接池对象
    sqlConnet: function (sql, sqlArr, callback) {
        const pool = mysql.createPool(this.config);
        pool.getConnection((err, conn) => {
            if (err) {
                console.error(`${this.config.host}：数据库连接失败`);
                return;
            }
            //事件驱动回调
            conn.query(sql, sqlArr, callback);
            //释放连接
            conn.release();
        });
    }
};
