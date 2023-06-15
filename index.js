
require('dotenv').config();
const connectDB = require('./config/db')

connectDB();
const express = require('express');
const app = express();
app.use(express.json())

const {
    createUser,
    getUsers,
    deleteUser
} = require('./controllers/userController');

app.post('/api/user', createUser);
app.get('/api/users', getUsers);
app.delete('/api/user', deleteUser);
app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on PORT ${process.env.PORT}`)
});

