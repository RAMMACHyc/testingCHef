const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = user;
    req.token = token; 
    next();
  });
}

module.exports = {
  authenticateToken,
};
