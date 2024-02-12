const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/signup', userController.signUp);
router.delete('/delete/:userId', userController.deleteUser);

module.exports = router;