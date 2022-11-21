const User = require('./../models/userModel');



exports.getAllUsers = async (req, res) => {

    //1. Get users data from database or collection
    const users = await User.find();

    //2. Build Template


    //3. Render that template using users data from 1.

    res.status(200).render('users', {
        title: "All users",
        users
    });
};