const Admin = require('../models/admin.model');
const Assignment = require('../models/assignment.model');

exports.registerAdmin = async (req, res) => {
    const { admin, email, password } = req.body;
    try {
        const adminDb = new Admin({ admin,email, password });
        await adminDb.save();
        res.status(201).send('Admin registered');
    } catch (error) {
        res.status(400).json({ message: "admin already registerd!, Pleae login" });
    }
};

exports.loginAdmin = async (req, res) => {
    const { admin, password } = req.body;

    try {
        const adminDb = await Admin.findOne({ admin });
        if (!adminDb) {
            return res.status(404).send('User not found');
        }
        if (adminDb.password !== password) {
            return res.status(400).send('Incorrect password');
        }
        res.status(200).send('User logged in successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.viewAssignments = async (req, res) => {
    const { admin } = req.params;
    try {
        const assignments = await Assignment.find({ admin });
        res.status(200).json(assignments);
    } catch (error) {
        res.status(400).json({ message: "Assignment does not exist" });
    }
};

exports.acceptAssignment = async (req, res) => {
    const { id } = req.params;
    try {
        const assignment = await Assignment.findByIdAndUpdate(id, { status: 'accept' });
        res.status(200).send('Assignment accepted');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.rejectAssignment = async (req, res) => {
    const { id } = req.params;
    try {
        const assignment = await Assignment.findByIdAndUpdate(id, { status: 'reject' });
        res.status(200).send('Assignment rejected');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
