const express = require('express');
const router = express.Router();
const md5 = require('md5');
const mysql = require('mysql');
const fs = require('fs');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
      database: 'event'
});

router.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = md5(req.body.pass);
  const cpassword = md5(req.body.cpass);
  const c_password = req.body.pass;
  const designation = req.body.designation;
console.log(req.body)
  const sqlSelect = 'SELECT * FROM user WHERE email = ?';
  conn.query(sqlSelect, [email], (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      const error = 'User email already exists!';
      res.render('register', { error });
    } else {
      if (password !== cpassword) {
        const error = 'Confirm password not matched!';
        res.render('register', { error });
      } else {
        const sqlInsert = 'INSERT INTO user (name, email, password, designation,c_password) VALUES (?, ?, ?, ?,?)';
        conn.query(sqlInsert, [name, email, password, designation,c_password], (err, result) => {
          if (err) throw err;
          res.redirect('/login');
        });
      }
    }
  });
});

module.exports = router;
