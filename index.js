const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');
const { connectDB } = require('./config/db');

const app = express();
const port = process.env.PORT || 3000; 


app.use(express.json()); 

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
