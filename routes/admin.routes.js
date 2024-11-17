const express = require('express');
const { registerAdmin, loginAdmin, viewAssignments, acceptAssignment, rejectAssignment } = require('../controllers/admin.controller');
const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/:admin/assignments', viewAssignments);
router.post('/assignments/:id/accept', acceptAssignment);
router.post('/assignments/:id/reject', rejectAssignment);

module.exports = router;
