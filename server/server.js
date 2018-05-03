const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
    database: 'shoe_store', //the name of the database
    host: 'localhost', //where is your database?
    port: 5432, //port of database, 5432 = default for postgres
    max: 10, //how many connections (queries) at one time
    idleTimeoutMillis: 30000, //30 seconds to try to connect, otherwise cancel query
});

pool.on('connect', () => {
    console.log('postgresql connected');

});

pool.on('error', (error) => {
    console.log('error with postgres pool', error);
})


const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

app.use(express.static('server/public'));


app.get('/shoe', function (req, res) {
    console.log('get thing');
});


app.post('/shoe', function (req, res) {
    const shoe = req.body;
    pool.query(`INSERT INTO "shoes" ("name", "cost")
                VALUES ($1, $2);`, [shoe.name, shoe.cost])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error with SQL INSERT on shoe POST', error);
            res.sendStatus(500);
        });

});


app.listen(PORT, () => {
    console.log(`tuning in to PORT, ${PORT}`);
});