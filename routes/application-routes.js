// Router
const express = require("express");
const router = express.Router();

// Modules
const userDao = require("../modules/user-dao.js");
const auth = require("../modules/authentication.js");
const aws = require("../modules/aws.js");

// Setup multer (files will temporarily be saved in the "temp" folder).
const path = require("path");
const multer = require("multer");
const upload = multer({
  dest: path.join(__dirname, "temp"),
});

// Setup fs
const fs = require("fs");

// bcrypt
// const bcrypt = require("bcrypt");

// additional routes
router.use("/article", require("./article-application-routes.js"));
router.use("/user", require("./user-application-routes.js"));

// Global variables
const twoHours = 2 * 60 * 60 * 1000;
let incorrectGuesses = 0;

// Get homepage if user logged in
router.get("/", async function (req, res) {

  // Get cookie from client
  let cookie = req.headers.cookie;

  // Check if cookie valid
  res.locals.isLoggedIn = !auth.IsInputEmptyOrString(cookie)

  // Get AWS images
  res.locals.placeHolderList = aws.getPlaceholderImages();

  // Set title
  res.locals.title = "Home";

  res.render("home");
  return;
});

// TODO: User authentication
router.post("/login", async function (req, res) {

  let currentUserId;

  let user_id = await userDao.checkMatchingUser(req.body.username, req.body.password);

  if (user_id !== null) {
    res.locals.isLoggedIn = true;
    currentUserId = user_id
  } else {
    res.locals.isLoggedIn = false;
  }

  if (res.locals.isLoggedIn) {

    // Set 2 hour cookie
    res.cookie('userCode', currentUserId, { maxAge: twoHours, httpOnly: true });

    res.redirect("/new-account")
  } else {
    incorrectGuesses++;

    // If too many incorrect guesses, redirect to new account page
    if (incorrectGuesses >= 3) {
      incorrectGuesses = 0;
      console.log("Please create a new account");
      res.redirect("/new-account");
    } else {
      console.log("Incorrect username or password");
      res.status(401).send("Incorrect username or password");
    }
  }
  return;
});

// GET new account page
router.get("/new-account", async function (req, res) {

  // Get cookie from client
  let cookie = req.cookies['userCode']

  // Check if valid
  let isLoggedIn = !auth.IsInputEmptyOrString(cookie)

  if (isLoggedIn) {
    res.locals.title = "Your account";

    res.locals.newAccountButtonText = "Save Changes"

    // Set user's data
    res.locals.userData = await userDao.getUserData(cookie);
    
  } else {
    res.locals.title = "New Account";

    res.locals.newAccountButtonText = "Create Account"
  }

  // Get data
  res.locals.avatarUrlList = aws.getAvatarList();

  res.render("new-account");
});

// TODO: Create new account
router.post("/new-account", async function (req, res) {

  // Create user object
  let userObject =
  {
    username: req.body.username,
    password: req.body.password,
    fName: req.body.fName,
    lName: req.body.lName,
    dateOfBirth: req.body.dateOfBirth,
    description: req.body.description,
    // avatar: req.body.avatar
    avatar: 2
  }
  let isInvalidUser = false;

  // Check none of them are empty/undefined/null
  for (const [key, value] of Object.entries(userObject)) {
    if (auth.IsInputEmptyOrString(value)) {
      isInvalidUser = true;
    }
  }

  if (isInvalidUser) {
    res.send("user Invalid")
    return;
  }

  // Check avatar is valid - split to get Id only
  let isAvatarValid = auth.IsAvatarIdValid(userObject.avatar.split(".")[0]);

  if (!isAvatarValid) {
    res.send("Avatar not valid")
    return;
  }

  // Check password valid
  let isPasswordValid = auth.IsPasswordValid(userObject.password);

  if (!isPasswordValid) {
    res.send("password not valid")
    return;
  }
  await userDao.addUser(userObject);
  res.send("User added");
});

// Get all usernames as list
router.get("/usernames", async function (req, res) {
  userDao.getAllUsernames().then((result) => {
    res.send(result);
  });
  return;
})

// to create a new article
router.get("/new-article", function (req, res) {

  // Get cookie from client
  let cookie = req.headers.cookie;

  // Check if cookie valid
  isCookieValid = !auth.IsInputEmptyOrString(cookie)

  // If not valid, redirect back to home
  if (!isCookieValid) {
    res.redirect("/");
  }

  // Set title
  res.locals.title = "Create Article";

  // create new article page if logged in
  res.render("new-article");
  return;
});

// to post new images
router.post("/upload-image", upload.single("imageFile"), function (req, res) {
  const fileInfo = req.file;

  // Move the file somewhere more sensible
  const oldFileName = fileInfo.path;
  const newFileName = `./public/uploadedFiles/${fileInfo.originalname}`;
  fs.renameSync(oldFileName, newFileName);

  // Get some information about the file and send it to the uploadDetails view for rendering.
  res.locals.fileName = fileInfo.originalname;
  res.locals.fileLocation = `/uploadedFiles/${fileInfo.originalname}`;
  res.render("uploaded-image");
});

router.get("/login", async function (req, res) {
  res.redirect("/");
});

router.get("/test", async function (req, res) {
  let data = userDao.test();
  res.send(data)
});

module.exports = router;
