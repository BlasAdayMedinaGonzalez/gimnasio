const mysql = require('mysql');
const config = require('./config.json');

const db_connection = mysql.createConnection({
    "host": process.env.DB_HOST || config.host,
    "user": process.env.DB_USER || config.user,
    "password": process.env.DB_PASS || config.password,
    "database": process.env.DB_DATABASE || config.database
});

db_connection.connect( (err) => {
    if (err) {
        console.error(err.message);
        if (err.code === 'ETIMEDOUT') {
            console.log("Can't connect to database");
        }
        process.exit(1);
    }
    console.log("Connected to database");
});

const query = (queryString, params) => {
    return new Promise((resolve, reject) => {
        db_connection.query(queryString, params, (err, results, fields) => {
            if (err){
                reject(err);
            }
            resolve(results);
        })
    })
}

module.exports = {query};