const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());


////////////
 
////////////

app.get('/shoe', function (req, res) {
    console.log('get thing');
    res.send
});


app.post('/shoe', function (req, res) {
    console.log('post thing', req.body);
    res.sendStatus(200);
});


app.listen(PORT, () => {
    console.log(`tuning in to PORT, ${PORT}`);
});