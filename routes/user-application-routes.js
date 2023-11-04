const express = require("express");
const router = express.Router();

router.post("/logout", async function (req, res) {

    // clear cookies and set logged in to false
    res.locals.isLoggedIn = false;
    res.cookie("userCode", null);
    res.redirect("/");
  });
  
  router.post("/log-out", async function (req, res) {

    // clear cookies and set logged in to false
    res.locals.isLoggedIn = false;
    res.cookie("userCode", null);
    res.redirect("/");
  });
  
  router.post("/sign-out", async function (req, res) {
  
    // clear cookies and set logged in to false
    res.locals.isLoggedIn = false;
    res.cookie("userCode", null);
    res.redirect("/");
  });
  
  router.post("/signout", async function (req, res) {
  
    // clear cookies and set logged in to false
    res.locals.isLoggedIn = false;
    res.cookie("userCode", null);
    res.redirect("/");
  });

  module.exports = router;
