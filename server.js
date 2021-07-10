const express = require('express');

const exphbs = require('express-handlebars')

//  const sequelize = require('./config/connection');
const routes = require('./controllers');
const path = require('path');
const session = require('express-session');


const app = express();
const PORT = process.env.PORT || 3001;
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

app.use(express.json());
// Parsing
app.use(express.urlencoded({ extended: false }));
app.use(session(sess));

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));


//Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.engine('handlebars', exphbs({
  layoutsDir: __dirname + '/views/layouts',
}));



//app.use(require('./controllers/'));

app.use(routes);

app.post("/login", function (req, res) {
  var obj = JSON.parse(req.body);
  console.log("From /update", obj);
  res.send("Success");
});

app.get("/test", function (req, res) {
  console.log()
  res.send("Test works");
});



//  sequelize.sync({ force: false }).then(() => {
// app.listen(PORT, function() {
//   console.log('App listening on PORT ' + PORT);
// });
//  });
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});
