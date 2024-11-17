const User = require('../models/user.model');
const Admin = require('../models/admin.model');
const Assignment = require('../models/assignment.model');

exports.registerUser = async (req, res) => {
    const { userId, email,password } = req.body;
    try {
        const user = new User({ userId, email, password });
        await user.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(400).json({ message: "User already registerd! please login"});
    }
};


exports.loginUser = async (req, res) => {
    const { userId, password } = req.body;

    try {
        const user = await User.findOne({ userId });
        
        if (!user) {
            return res.status(404).send('User not found, Please Register');
        }
        
        if (user.password !== password) {
            return res.status(400).send('Incorrect password');
        }

        res.status(200).send('User logged in successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};


exports.uploadAssignment = async (req, res) => {
    const { userId, task, admin } = req.body;
    try {
        const assignment = new Assignment({ userId, task, admin });
        await assignment.save();
        res.status(201).send('Assignment uploaded');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.fetchAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
