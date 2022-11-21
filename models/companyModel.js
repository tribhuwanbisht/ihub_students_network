const mongoose = require('mongoose');


const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        unique: true
    },
    package: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "Software developer"
    },
    eligibleBranches: {
        type: String,
    },
    eligibilityCriteria: {
        type: String,
        default: "All are eligible"
    },
    tier: {
        type: String,
        default: "Normal"
    },
    offerType: {
        type: String,
        default: "FTE"
    },
    driveDate: {
        type: Date,
        default: Date.now(),
    },
    driveMode: {
        type: String,
        default: "Online"
    },
    location: {
        type: String,
        default: "Not known"
    }
});


const Company = mongoose.model('Company', companySchema);

module.exports = Company;