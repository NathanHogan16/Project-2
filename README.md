# Slim-Pickins

Slim-Pickins is a web application used to deliver recipes for you when you dont know what to make but something sounds appealing in a predetermined category.

# ERRORS
we ran into scheduling issues and errors and have scrambled to make the best of this project as possible. we know there are a lot of issues and have been trying tirelessly to fix them



## Code snippet 

```javascript
// Dependencies
const express = require('express');
const sequelize = require('./config/connection');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Routes
app.use(require('./routes/api-routes'));
app.use(require('./routes/user-routes'));

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});

```

## Contributors
David Sanchez
Jonah Callister
Nate Hogan
Mckerry Wimberly II



MIT License
/apm/l/:packageName
Copyright (c) [2021] [team 9]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Deployed Application: https://cryptic-waters-01344.herokuapp.com/
