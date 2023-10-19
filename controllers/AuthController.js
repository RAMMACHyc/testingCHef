const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Client = require('../models/User');

function generateToken(userId) {
  return jwt.sign({ userId }, 'your_secret_key', { expiresIn: '1h' });
}

async function register(req, res) {
    const { email, password, first_name, last_name, picture } = req.body;
  
    try {
      if (!password) {
        return res.status(400).json({ error: 'Password is required.' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
   
      const client = await Client.create({
        email,
        password: hashedPassword,
        first_name,
        last_name,
        picture
      });
  
      res.json({ client });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ error: 'An error occurred while registering the user.' });
    }
  }
  



async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

   
    const token = generateToken(user.id);

    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login.' });
  }
}


function refreshToken(req, res) {
  const token = generateToken(req.user.userId);
  res.json({ token });
}

const blacklist = [];

function logout(req, res) {
 
  blacklist.push(req.token);
  res.sendStatus(200);
}

function isTokenBlacklisted(req, res, next) {
  if (blacklist.includes(req.token)) {
    return res.sendStatus(401);
  }
  next();
}

module.exports = {
  register,
  login,
  generateToken,
  refreshToken,
  logout, 
  isTokenBlacklisted,
};
