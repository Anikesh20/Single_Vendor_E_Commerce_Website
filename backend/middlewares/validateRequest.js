module.exports = (validationFn) => {
  return (req, res, next) => {
    const validationError = validationFn(req.body);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }
    next();
  };
};
