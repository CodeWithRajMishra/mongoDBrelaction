const StuModel = require("../models/stuModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const stuRegistration = async (req, res) => {
    const { name, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await StuModel.create({
        name: name,
        email: email,
        password: passwordHash
    })
    res.send("user Succesfully Registered!!!");
}
const stuLogin=async(req, res)=>{
    const {email, password} = req.body;
    const user = await StuModel.findOne({email:email});
    if (!user){
         res.status(400).send({msg: "Invalid Email!"});
    }
    const passwordValidate = await bcrypt.compare(password, user.password);
    if (!passwordValidate){
          res.status(400).send({msg: "Invalid Password!"});
    }
   
    const token = jwt.sign({id:user._id}, "raj1234",  { expiresIn: "1d" });
    res.status(200).send({token:token, msg:"user successfully login"});
}

const userAuth=async(req, res)=>{
   // console.log(req.headers);
   const token=req.header('auth-token');
   const decode   = await jwt.verify(token, "raj1234");
   console.log(decode.id);

   const user =await StuModel.findById(decode.id).select("-password");
   console.log(user);
   res.send(user);
}


module.exports = {
    stuRegistration,
    stuLogin,
    userAuth
}