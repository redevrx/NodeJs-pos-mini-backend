const db = require("../utils/db");
const express = require("express");
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {RegisterValidate , LoginValidated} = require('../controller/Validation')

//login compare as db
const login = async (req, res)=>{
    const {error} = LoginValidated(req.body)

    if(error) return res.status(400).send(error.details[0].message)

    
    const user = await User.findOne({email:req.body.email})
   if(!user) res.send('Login Error..')

   //password is correct
   const validPass = await bcrypt.compareSync(req.body.password , user.password)
   if (!validPass) return res.status(400).send("Invalid password");


   //create and assign a token
   const payload = {
       _id:user._id,
       role:'redevAPI'
   }
   const token = jwt.sign(payload ,process.env.TOKEN_SECRET)
   res.header('auth-token').json({access_token:token})
};

//register
const register = async (req, res)=>{
    const {error} = RegisterValidate(req.body)

    if(error) return res.status(400).send(error.details[0].message)

    //check email in database 
    const email = await User.findOne({email:req.body.email})
    if(email)
    {
        res.status(400).send('Email already exists')
    }
    else
    {
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hashSync(req.body.password,salt)

        //user model 
        const user = User({
            name:req.body.name,
            lastName:req.body.lastName,
            email:req.body.email,
            password:hashPassword
        })
    
        const save = await user.save()
      res.send(save);
    }
};


// user request get info 
const getUserInfo = async (req,res)=>{
    const user = await User.findOne({_id:req.user})
    if(!user) return res.status(400).send('not found')

    res.status(400).send(user)
}

module.exports = { login ,register ,getUserInfo};
