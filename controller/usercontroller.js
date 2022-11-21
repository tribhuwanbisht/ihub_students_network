const User = require('./../models/userModel');

exports.getAllUsers = async (req, res) => {
    const users = await User.find();

    res.status(200).json({
        status: "Success",
        results: users.length,
        data: {
            users
        }
    })

    // res.status(200).render('dashboard', {
    //     title: "All users",
    //     users
    // });
};


exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);

    res.status(200).json({
        status: "Success",
        data: {
            user
        }
    })
};