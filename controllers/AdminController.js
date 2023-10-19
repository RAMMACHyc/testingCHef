
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const {Admin,User} = require('../models')

// const User = require('../models/User')



async function addNewAdmin(req ,res){

    console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");

    const{ first_name,last_name , email ,password,picture , role} = req.body

    console.log(req.body);

    try {
        if (!password) {
          return res.status(400).json({ error: 'Password is required.' });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);


        const Users = await User.create({
            email,
            password: hashedPassword,
            first_name,
            last_name,
            picture ,
            role,
            admins: {}
          },{include : [User.Admin]});
      
          // res.json({ Users });

          console.log('jjjjjjjj');

          if(Users){
            // Users.save()

            console.log(Users.id);
            const admin = await Admin.create({ userId: Users.id })


            console.log(Users);
            console.log(admin);

          }else  {
            (error)
            console.error('Error during registration:', error);
            res.status(500).json({ error: 'An error occurred while adding new admin.' });
          }
          
        } catch (error) {
          console.error('Error during registration:', error);
          res.status(500).json({ error: 'An error occurred while adding new admin.' });
        }

}




module.exports = {addNewAdmin}