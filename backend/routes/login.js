const express = require('express');
const Router= express.Router();
const User= require('/home/venkatesh/Documents/project/money/backend/models/user');
const bcrypt = require('bcrypt');
const loginValidation = require('../validation/login');

Router.post('/login', async (req,res) => {

    try {
      const { error } = loginValidation.validate(req.body);
      if (error) return res.status(400).json({ message: error.details[0].message });
        const { email, password } = req.body;
    
        // Basic input check
        if (!email || !password) {
          return res.status(400).json({ message: "Email and password are required" });
        }
    
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ message: "Invalid email or password" });
        }
    
        // Compare password with hashed one
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ message: "Invalid email or password" });
        }
    
        res.status(200).json({ message: "Login successful ✅" });
    
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error. Try again later." });
      }
})
   
module.exports=Router;