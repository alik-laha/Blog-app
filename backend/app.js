const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());

// route import
const artical = require('./route/articalRouter')

const user = require('./route/userRouter')

app.use('/api/v1', artical, user)

module.exports = app