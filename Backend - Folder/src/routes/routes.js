const express = require('express');
const router = express.Router();
const PTController = require('../controllers/controllers');

router.post('/loginUser', PTController.loginUser);

router.post('/loginAdmin', PTController.loginAdmin);

router.post('/registerUser', PTController.registerUser);

router.get('/allUser', PTController.allUser);

router.delete('/deleteUser', PTController.deleteUser);

router.put("/updateUser", PTController.updateUser);

module.exports = router;