const express = require("express");
const router = express.Router();
const articleDao = require("../modules/article-dao.js");

// Get likes for all article
router.get("/likes", async function (req,res){

// Get all likes for all articles
let likeData = await articleDao.getAllLikes();

// Return data to client
res.send(likeData);

 return;
});

// post likes for article
router.get("/like", async function (req, res){

  // update likes for article
  let selectedArticleLikes = await articleDao.getArticleLikes(1);

  // return message to client
  console.log(selectedArticleLikes);

  res.send(selectedArticleLikes);

 return;
});

// post likes for article
router.post("/likes/:article_id", async function (req, res){

  // update likes for article
  let selectedArticleLikes = await articleDao.updateLikesForArticle(1);

  // return message to client
  console.log(selectedArticleLikes);

  res.send(selectedArticleLikes);

 return;
});

// post likes for account
router.get("/likes/:user_id", async function (req, res){

  // update likes for article
  let selectedArticleLikes = await articleDao.getLikedArticles(1);

  // return message to client
  console.log(selectedArticleLikes);

  res.send(selectedArticleLikes);

 return;
});

// Article Endpoints
// post likes for account
router.get("/:article_id", async function (req, res){

  // asign title for page
  res.locals.title = "New Article";

  res.send("Sending Article page now");

  // res.render(article-page);

 return;
});

module.exports = router;
