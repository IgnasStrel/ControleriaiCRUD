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
//CREATE
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
//SELECT VISUS
const getUsers = async (req, res) => {
    const result = await User.find();
    res.send(result);
}
//SELECT TIK PAGAL NAME
const getUserByName = async (req, res) => {
    const result = await User.find({name: req.body.name});
    res.send(result);
}
//SELECT TIK PAGAL ID
const getUserById = async (req, res) => {
    const result = await User.find({_id: req.params.id});
    res.send(result);
}
//DELETE TIK PAGAL ID
const deleteUser = async (req, res) => {
    const result = await User.deleteOne({_id: req.params.id})

    res.send(result)
}
//UPDATE TIK PAGAL ID

const updateUser = async (req, res) => {
    const result = await User.updateOne({
        _id: req.params.id}, {
            $set: {
                name: req.body.name,
                password: req.body.password
            }
        });
res.send(result)
}
module.exports = {
    createUser, getUsers, getUserByName, getUserById, updateUser, deleteUser
}
