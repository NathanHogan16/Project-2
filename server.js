const express = require('express');
//const mysql = require('mysql');
const exphbs = require('express-handlebars')

//const passport = require('passport');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const path = require('path');
const  session = require('express-session');

// Server port
const app = express();
const PORT = process.env.PORT || 3000;
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

// Parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
//app.use(routes);

// app.engine('handlebars', hbs.engine);

app.use(express.static("public"));


// Passport
// app.use(passport.initialize());
// app.use(passport.session());



// Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.engine('handlebars', exphbs({
    layoutsDir: __dirname + '/views/layouts',
    }));

app.use(express.static('public'))
// var template = Handlebars.compile("./views/layouts/homepage.handlebars")
// console.log(template)
// app.get('/recipe', (req, res) => {
//     const payload = {body: req.params.recipe}
//      res.render('recipes')
//     // console.log("hello")
//     // res.send(payload)
// });

// app.get('/', (req, res) => {
//     //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
//     res.render('homepage', {layout : 'main'});
// });

// app.use((req, res) => {
//     res.status(404).end();
// });

// app.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
// });


// turn on routes
app.use(routes);

// app.listen(PORT, () => {
    // console.log(`Server running on port ${PORT}`);
// });
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function() {
      console.log('App listening on PORT ' + PORT);
    });
  });
