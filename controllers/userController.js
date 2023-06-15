const User = require('../modeliai/User');
require('dotenv').config();
const connectDB = require('../config/db')

connectDB();
const express = require('express');
const app = express();
app.use(express.json())

// @desc Register new user

// @route POST /api/users

// @access PUBLIC

const createUser = async (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.password) res.status(404).send("not found");
    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const result = await user.save();
    res.status(200).send(result)
}
const getUsers = async (req, res) => {
    const result = await User.find();
    res.send(result);
}

const deleteUser = async (req, res) => {
    const result = await User.find()

    const user_index = User.indexOf(result)
    User.splice(user_index, 1);

    res.send(XPathResult)
}
module.exports = {
    createUser, getUsers, deleteUser
}
