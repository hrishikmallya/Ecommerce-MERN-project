var express = require("express");
const { check, validationResult } = require("express-validator");
var router = express.Router();
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 5 })
      .withMessage("name must be at least 5 chars long"),
    check("email").isLength({ min: 5 }).isEmail().withMessage("invalid email"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("password must be at least 5 chars long"),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email").isLength({ min: 5 }).isEmail(),
    check("password").isLength({ min: 5 }).withMessage("password is required!"),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
