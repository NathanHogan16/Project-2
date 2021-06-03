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
const PORT = process.env.PORT || 3001;
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

app.use(express.static("public"));


// Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.engine('handlebars', exphbs({
    layoutsDir: __dirname + '/views/layouts',
    }));

app.use(express.static('public'))



// turn on routes
 app.use(routes);

 sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function() {
      console.log('App listening on PORT ' + PORT);
    });
 });
