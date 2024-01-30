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
    const guest_name = req.body.guest_name ;
    const designation= req.body.designation;
    const experience= req.body.experience;
    const payableFee= req.body.payableFee;
    const transport= req.body.transport;
    const chequeCopy= req.body.chequeCopy;
    console.log(req.body)
    // const sqlInsert = 'INSERT INTO events (ename, edate, etime, evenue,speaker,reqSy,no_systems) VALUES (?, ?, ?, ?,?,?,?)';
    // conn.query(sqlInsert, [ename, edate, etime, evenue,speaker,reqSy,no_systems], (err, result) => {
    //   if (err) throw err;
    //   res.render('event', {ename,edate,etime,evenue});
    // });
    res.redirect('/programSchedule')
});

module.exports = router;
