const express = require('express');
const { registerUser, loginUser, uploadAssignment, fetchAdmins } = require('../controllers/user.controller');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/upload', uploadAssignment);
router.get('/viewAdmins', fetchAdmins);

module.exports = router;
