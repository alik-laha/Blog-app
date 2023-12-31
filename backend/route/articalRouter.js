const express = require('express');
const { createArtical, updateArtical, DeleteArtical, getAllData, search, getOne} = require('../controller/artical');
const Varify =require('../config/auth')
const multer =require('multer')
const upload=multer({dest:"uploads/"})
const router = express.Router();

//creat a artical--(every one)
router.post('/artical/new',upload.single("image"),createArtical);

//delete a artical---(auther)
router.delete('/artical/:id',Varify,DeleteArtical);

//update a artical--(auther)
router.put('/artical/:id',Varify,updateArtical);

//getall artical ---(every one)
router.route('/',Varify).get(getAllData);

//search artical
router.route('/artical/:key',Varify).get(search)

//get one artical to read
router.route('/read/:id',Varify).get(getOne);

module.exports = router