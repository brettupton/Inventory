const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

router.get('/login', (req, res) => {
    res.render('login.ejs');
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

module.exports = router;