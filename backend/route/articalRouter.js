const express = require('express');
const { createArtical, updateArtical, DeleteArtical, getAllData, search } = require('../controller/artical');

const router = express.Router();

//creat a artical--(every one)
router.route('/artical/new').post(createArtical);

//delete a artical---(auther)
router.route('/artical/:id').delete(DeleteArtical);

//update a artical--(auther)
router.route('/artical/:id').put(updateArtical);

//getall artical ---(every one)
router.route('/').get(getAllData);

//search artical
router.route('/artical/:key').get(search)


module.exports = router