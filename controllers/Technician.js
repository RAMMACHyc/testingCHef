const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Technicien} = require('../models/Technicien');




async function register(req, res) {
    const { first_name, last_name,email, password,disponibility,speciality,role, picture } = req.body;
  
    try {
      if (!password) {
        return res.status(400).json({ error: 'Password is required.' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
   
      const technicien = await Techniciens.create({
        email,
        password: hashedPassword,
        first_name,
        last_name,
        picture ,
        disponibility,
        speciality,
        role
      });

      
  
      res.json({ technicien });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ error: 'An error occurred while registering the user.' });
    }
  }





  module.exports = {
    register
  };