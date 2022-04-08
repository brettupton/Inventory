const express = require('express');
const router = express.Router();
const UserModel = require('../model/User');
let username, password;

router.get('/login', (req, res) => {
    res.render('login.ejs');
    UserModel.find({}, (err, docs) => {
        username = docs[0].username;
        password = docs[0].password;
    });
})

router.post('/login', (req, res) => {
    const { usernameAttempt, passwordAttempt } = req.body;
    if (usernameAttempt === username && passwordAttempt === password) {
        res.send('Success!');
    } else {
        res.send('Failure :(');
    }
})

module.exports = router;