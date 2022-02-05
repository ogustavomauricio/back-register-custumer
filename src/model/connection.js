const { MongoClient } = require('mongodb');
require('dotenv').config();

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = process.env.MONGO_DB_URL ||'mongodb://127.0.0.1:27017';
const MONGO_DB_NAME = 'Dguest'

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db(MONGO_DB_NAME);
    return db;
    })
};

module.exports = {connection};