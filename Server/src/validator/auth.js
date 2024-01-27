const { check, validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

const validateSignUpRequest = [
  check("fullname").notEmpty().withMessage("Full Name is required"),
  check("email").isEmail().withMessage("Valid Email required"),
  check("contactnumber").isLength({ min: 10 }).withMessage("Number type with length of 10"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/^(?=.*[A-Za-z\d@])[A-Za-z\d@]{8,}$/)
    .withMessage("Password must contain at least one letter and one number"),
];

const validateSignIpRequest = [
  check("email").isEmail().withMessage("Valid Email required"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/^(?=.*[A-Za-z\d@])[A-Za-z\d@]{8,}$/)
    .withMessage("Password must contain at least one letter and one number"),
];

const isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.array().length > 0) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: errors.array()[0].msg });
  }
  next();
};

module.exports = {
  validateSignUpRequest,
  isRequestValidated,
  validateSignIpRequest,
};
