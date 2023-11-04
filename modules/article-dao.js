const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function getAllLikes() {
    const db = await dbPromise;

    // Get userId if matches username and password
    let result = await db.all(SQL`
        SELECT *
        FROM Likes
    `)
    if(result === undefined){
        return null;
    }
    return await result;
}

async function getArticleLikes(article_id) {
    const db = await dbPromise;

    // Get userId if matches username and password
    let result = await db.all(SQL`
        SELECT *
        FROM Likes
        WHERE article_id = ${articleId}
    `)
    if(result === undefined){
        return null;
    }
    return await result;
}

async function updateLikesForArticle(article_id, user_id) {
    const db = await dbPromise;

    // Get check if existing record (i.e already liked).
    let result = await db.all(SQL`
        SELECT *
        FROM Likes
        WHERE article_id = ${articleId}
        AND user_id = ${userId}
    `)
    // If no existing record, add record
    if(result === undefined){
        let insertResult = await db.run(SQL`
            INSERT INTO Likes (article_id, user_id)
            VALUES (${articleId}, ${userId})
        `)
        if(insertResult === undefined){
            return true;
        }
        return true;
    }
    // If existing record, delete record
    else{
        let deleteResult = await db.run(SQL`
            DELETE FROM Likes
            WHERE article_id = ${articleId}
            AND user_id = ${userId}
        `)
        if(deleteResult === undefined){
            return false;
        }
        return true
    }
}

module.exports = {
    getAllLikes, 
    getArticleLikes,
    updateLikesForArticle,
    
};
