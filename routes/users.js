const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

router.get('/login', (req, res) => {
    res.render('login.ejs');
})

// router.post('/login', (req, res) => {
//     const { usernameAttempt, passwordAttempt } = req.body;
//     if (usernameAttempt === username) {
//         bcrypt.compare(passwordAttempt, process.env.HASH, (err, comp) => {
//             if (comp) {
//                 res.send('Success!');
//             } else {
//                 res.render('login.ejs', { error : "Password is incorrect" });
//             }
//         });
//     } else {
//         res.render('login.ejs', { error : "Username or password is incorrect" });
//     }
// })

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login'
    })(req, res, next);
});

module.exports = router;