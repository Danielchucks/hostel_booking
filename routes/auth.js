const express = require("express");
const router = express.Router();

// @route    GET api/auth
// @desc     Get login user
//@access    Private

router.get("/", (req, res) => {
   res.send("Get logged in user");
});

// @route    POST api/auth
// @desc     auth user & get token
//@access    Public

router.post("/", (req, res) => {
   res.send("login user");
});

module.exports = router;
