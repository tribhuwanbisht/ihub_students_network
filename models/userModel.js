const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email should be unique"]
    },
    role: {
        type: String,
        enum: ['user', 'teacher', 'admin'],
        default: "user"
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    course: {
        type: String,
        default: "MCA"
    },
    branch: {
        type: String,
        default: "CSE"
    }
});

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
})


//Candidate password=The password that the user passes in the body 
//User password=Actual password

userSchema.methods.correctPassword = async function (candidatePasswrod, userPassword) {
    return await bcrypt.compare(candidatePasswrod, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;