const StuModel = require("../models/stuModel");
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require("../cloudinary");


const stuSave=async(req, res)=>{
     console.log(req.body);
     res.send("Data save!");
}

module.exports = {
    stuSave
}