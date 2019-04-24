const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./services/dbconnection');

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/api/register",  cors(), function(req, res) {
    var user = {
        "full_name" : req.body.user.username,
        "email" : req.body.user.email,
        "password" : req.body.user.password
    };

    db.query('INSERT INTO Users SET ?',  user , function(error, results, fields) {
        if(error) throw error;
        res.send({registration: "good" });
    });
});


app.get('/api/hello', cors(), (req, res, next) => {
    res.send({ express: 'Hello From Express' });
});


app.get('/api/profile', cors(), (req, res, next) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));