const dotenv = require("dotenv")

dotenv.config()



const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => { }
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function (stringValue) {
    return stringValue;
});

const HOST = process.env.HOST
const PORT = process.env.PORT
const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

const databaseConfig = {
    'host': HOST,
    'port': PORT,
    'database': DB_NAME,
    'user': DB_USER,
    'password': DB_PASS,
};

const db = pgp(databaseConfig);

module.exports = db;