const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const fs = require('fs');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'event'
});

router.post('/', (req, res) => {
    const ename= req.body.ename;
    const edate= req.body.edate;
    const venue= req.body.venue;
    const year= req.body.year;
    console.log(req.body)
    // const sqlInsert = 'INSERT INTO events (ename, edate, etime, evenue,speaker,reqSy,no_systems) VALUES (?, ?, ?, ?,?,?,?)';
    // conn.query(sqlInsert, [ename, edate, etime, evenue,speaker,reqSy,no_systems], (err, result) => {
    //   if (err) throw err;
    //   res.render('event', {ename,edate,etime,evenue});
    // });
    res.redirect('/resourcePerson')
});

module.exports = router;
