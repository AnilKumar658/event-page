const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret-key', resave: true, saveUninitialized: true }));


// //include all static files
app.use(express.static('public'));

// //indclude all html template engines
app.set('view engine','ejs')

// // Include login and register routes
const loginRoutes = require('./routers/login');
const registerRoutes = require('./routers/register');
const workshopRoutes = require('./routers/workshop');
const resourcePerson = require('./routers/resourcePerson');
const programSchedule = require('./routers/programSchedule');
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/workshop', workshopRoutes);
app.use('/resourcePerson', resourcePerson);
app.use('/programSchedule', programSchedule);

//Html Routers file display
app.get('/', (req, res) => {
  res.render('login');
});
app.get('/registerData', (req, res) => {
  res.render('register');
});
app.get('/student', (req, res) => {
    res.render('student');
  });
  app.get('/event', (req, res) => {
    res.render('event');
  });
  app.get('/addEvent', (req, res) => {
    res.render('addEvent');
  });
  app.get('/workshop', (req, res) => {
    res.render('workshop');
  });
  app.get('/guestlecture', (req, res) => {
    res.render('guestlecture');
  });
  app.get('/industrialtrip', (req, res) => {
    res.render('industrialtrip');
  });
  app.get('/resourcePerson', (req, res) => {
    res.render('resourcePerson');
  });
  app.get('/programSchedule', (req, res) => {
    res.render('programSchedule');
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
