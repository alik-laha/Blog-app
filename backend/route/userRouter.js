const express = require('express');
const { creatUser, Login, updateUser, ForgotPassword } = require('../controller/user');
const Varify = require('../config/auth')
const router = express.Router();

//for signup
router.route('/sign-up').post(creatUser);

//for login
router.route('/login').post(Login);

//for update
router.route('/update-user/:id').put(updateUser)

router.route("/confirmpass/:id", Varify).post(ForgotPassword)

module.exports = router;
