const express = require('express');
const router = express.Router();
const PTController = require('../controllers/controllers');

router.post('/loginUser', PTController.loginUser);

router.post('/loginAdmin', PTController.loginAdmin);

router.post('/registerUser', PTController.registerUser);

router.get('/allUser', PTController.allUser);

router.get('/selectuser', PTController.selectuser);

router.put("/updateUser", PTController.updateUser);

router.put("/topup", PTController.topup);

module.exports = router;