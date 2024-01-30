const express = require('express');
const router = express.Router();
const md5 = require('md5');
const mysql = require('mysql2/promise'); // Using mysql2/promise instead of mysql

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'event',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

router.post('/', async (req, res) => { // Make the callback function asynchronous
  // Login logic here
  const email = req.body.email;
  const password = md5(req.body.pass);
  try {
    const [rows] = await pool.execute('SELECT * FROM user WHERE email = ? AND password = ?', [email, password]);

    if (rows.length > 0) {
      const user = rows[0];
      if (user.designation === 'student') {
        req.session.student = user.id;
        res.redirect('/student');
      } else if (user.designation === 'faculty') {
        req.session.faculty = user.id;
        res.redirect('/faculty');
      }  else if (user.designation === 'hod') {
        req.session.hod = user.id;
        res.redirect('/hod');
      } 
      else {
        res.render('login', { error: 'No User Found' });
      }
    } else {
      const error='Invalid email or password';
      res.render('login', { error });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
