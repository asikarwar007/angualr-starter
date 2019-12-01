var express = require('express');
var router = express.Router();
var studentController = require('../controllers/student.controller')


router.post('/add', studentController.addData)
router.get('/list', studentController.getAllData)
router.post('/studentbyid', studentController.getDatabyId)
router.post('/edit', studentController.updateData)
router.post('/remove', studentController.deleteData)

module.exports = router;