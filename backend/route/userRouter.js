const express = require('express');
const { creatUser, Login } = require('../controller/user');

const router = express.Router();


router.route('/sign-up').post(creatUser);

router.route('/login').post(Login);

module.exports = router;
