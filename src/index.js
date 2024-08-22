const express = require('express');
const { App } = require('./app');
const db = require('./config/db/mongoDb');
const runConsumer = require('./kafka/consumer');
require('dotenv').config();


const app = express();

const port = process.env.APP_PORT;
const database_uri = process.env.DATABASE_MONGOS_URI

db.connect(database_uri);

App(app);

runConsumer();

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});