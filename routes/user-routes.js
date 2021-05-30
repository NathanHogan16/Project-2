const db = require('../models');

const passport = require('passport');
const LocalStrategy = require('passport-local');


    app.get('/users/login', function(req, res) {
        res.render()
    })

    app.post('/users/register', function(req, res) {
        var usernameInput = req.body.user_name
        if (!userPW || !usernameInput) {
            res.send('Cannot be left empty')
        }
        else {
            db.Users.findOne({ where:{user_name: usernameInput}}).then(function(data) {
                if (data) {
                    console.log('Username exists, please choose another')
                    res.send('Username exists, please choose another')
                }
            })
        }
        var userPW = req.body.password,
    })

    app.post('/users/login', function(req, res) {
        var userPW = req.body.password;
        db.Users.findOne({
            where: {
                user_name: req.body.user_name
            }
        }).then(function(user) {
            if (!user) {
                res.send('User does not exist')
                res.redirect('/');
            }
        });
    });

    module.exports = function(app) {
}