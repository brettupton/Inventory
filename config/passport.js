const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserModel = require('../model/User');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ username : 'username' }, (username, password, done) => {
            UserModel.findOne({ username : username })
                .then(user => {
                    if (!user) {
                        return done(null, false, { message : 'That username is not found' });
                    } 
                    bcrypt.compare(password, process.env.HASH, (err, isMatch) => {
                        if (err) throw err;
                        if (isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, { message : 'Incorrect password'});
                        }
                    })
                })
                .catch(err => console.log(err));
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        UserModel.findById(id, (err, user) => {
            done(null, user);
        })
    })
}
