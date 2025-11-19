const express = require("express");
const route = express.Router();
const StuController= require("../controllers/stuController");
route.post("/studentsave", StuController.stuSave);



module.exports=route;