const express = require('express');
const { createArtical, updateArtical, DeleteArtical, getAllData, search } = require('../controller/artical');
const Varify =require('../config/auth')
const router = express.Router();

//creat a artical--(every one)
router.post('/artical/new',Varify,createArtical);

//delete a artical---(auther)
router.delete('/artical/:id',Varify,DeleteArtical);

//update a artical--(auther)
router.put('/artical/:id',Varify,updateArtical);

//getall artical ---(every one)
router.get('/',Varify,getAllData);

//search artical
router.route('/artical/:key',Varify,search)


module.exports = router