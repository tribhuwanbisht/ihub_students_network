const express = require('express');

const Company = require('./../models/companyModel');

exports.getAllCompanies = async (req, res) => {
    const companies = await Company.find();

    res.status(200).json({
        status: "Success",
        results: companies.length,
        data: {
            companies
        }
    })
};


exports.createCompany = async (req, res) => {
    const newCompany = await Company.create(req.body);
    res
        .status(201)
        .json({ status: "success", data: newCompany });
}