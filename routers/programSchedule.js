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
    const eventTimings = req.body.eventTimings ;
    const participants= req.body.participants;
    const partcipantNames= req.body.partcipantNames;
    const specialGuest= req.body.specialGuest;
    const InvitationContent= req.body.InvitationContent;
    console.log(req.body)
    // const sqlInsert = 'INSERT INTO events (ename, edate, etime, evenue,speaker,reqSy,no_systems) VALUES (?, ?, ?, ?,?,?,?)';
    // conn.query(sqlInsert, [ename, edate, etime, evenue,speaker,reqSy,no_systems], (err, result) => {
    //   if (err) throw err;
    //   res.render('event', {ename,edate,etime,evenue});
    // });
   res.send('Data Received Successfully')
});

module.exports = router;
