/**
 * Cloud SQL Connection Pool
 * @author Phani Mahesh
 */

import mysql from 'mysql';
import CONFIG from '../shared/config.util';

let options = {
    connectionLimit: 10,
    user: CONFIG.DB.USER,
    password: CONFIG.DB.PASSWORD,
    database: CONFIG.DB.NAME,
    host: CONFIG.DB.HOST,
    port: CONFIG.DB.PORT
};

//This is mandatory if you use Google App Engine + Cloud SQL
if (process.env.NODE_ENV === 'production') {
    console.info(`Setting socket path : ${CONFIG.DB.INSTANCE_CONNECTION_NAME}`);
    options.socketPath = `/cloudsql/${CONFIG.DB.INSTANCE_CONNECTION_NAME}`;
}

export const pool = mysql.createPool(options);

pool.getConnection((err, connection) => {

    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error(`Database connection was closed.`)
        } else if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error(`Database has too many connections.`)
        } else if (err.code === 'ECONNREFUSED') {
            console.error(`Database connection was refused.`)
        } else {
            console.error(`Database Error Stack Trace : ${err}`);
        }
    }

    console.info(`Connected to DB as id : ${connection.threadId}`);

});
