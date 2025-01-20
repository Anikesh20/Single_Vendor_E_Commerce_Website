module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'default-secret-key',
    jwtExpiration: '1h',  
  };
  