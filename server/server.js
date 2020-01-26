const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('../server/modules/pool')
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    console.log(req.body);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`

    let values = [req.body.feeling,
    req.body.understanding,
    req.body.support,
    req.body.comment]

    pool.query(queryText, values)
        .then((result) => {
            res.sendStatus(200)

        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500)

        })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});