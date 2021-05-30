const db = require('models');
const passport = require('../config/passport');
const db = require('../models');
const passport = require('passport');



app.get('/categories', function (req, res) {
    let results = categories;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.get('/api/user/:user_name', function (req, res) {
    let username = req.params.user_name

    db.Recipe.findAll({
        where: {
            user_name: username
        }
    }).then(function (data) {
        var handlebarsObj = {
            user_name: username,
            recipes: data
        }
        res.render('user', handlebarsObj)
    });
});

app.get('/api/recipe/:recipe_name', function (req, res) {
    db.Recipe.findOne({
        where: {
            recipe_name: req.params.recipe_name
        }
    }).then(function (data) {
        var handlebarsObj = data.dataValues
        res.render('recipe', handlebarsObj)
    });
});

app.get('/api/ingredient/:ingredient_name', function (req, res) {
    db.Recipe.findOne({
        where: {
            ingredient_name: req.params.ingredient_name
        }
    }).then(function (data) {
        var handlebarsObj = data.dataValues
        res.render('ingredient', handlebarsObj)
    });
});

app.post('/api/recipe', function (req, res) {
    db.Recipe.create({

    })
})

app.delete('/api/recipe/:id', function (req, res) {
    db.Recipe.destroy({

    })
})
    
    module.exports = function(app) {
}
