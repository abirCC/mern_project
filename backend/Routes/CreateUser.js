const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const jwtSecret = "MynameisEndtoEndyoutubechannel$#";
router.post("/createuser", 
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  body('password').isLength({ min: 5 }),
  async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secrtPassword = await bcrypt.hash(req.body.password,salt);
    const data = new User({
      name: req.body.name,
      password: secrtPassword,
      email: req.body.email,
      location: req.body.location
     })
     const val = data.save();
     res.send({status:"success"});
})


router.post("/loginuser",
body('email').isEmail(),
body('password').isLength({ min: 5 }), 
async(req,res)=>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   let email = req.body.email;
   let userData = await User.findOne({email})
   if(!userData){
    return res.status(400).json({ errors:"Try Logging with Correct credentials" });
   }
   const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
   //if(req.body.password !== userData.password){
    if(!pwdCompare){
    return res.status(400).json({ errors:"Try Logging with Correct credentials" });
   }
   const data = {
     user : {
      id:userData.id
     }
   }
   const authToken = jwt.sign(data,jwtSecret)
   return res.json({status:"success",authToken:authToken});
})

module.exports = router;