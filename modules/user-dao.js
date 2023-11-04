const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");

async function checkMatchingUser(userName, password) {
    const db = await dbPromise;

    // Get userId if matches username and password
    let result = await db.get(SQL`
        SELECT user_id
        FROM Users
        WHERE username = ${userName}
        AND password = ${password}
    `)
    if(result === undefined){
        return null;
    }
    return await result.user_id;
}

async function getAllUsernames() {
    const db = await dbPromise;

    // Get userId if matches username and password
    const result = await db.all(SQL`
        SELECT username
        FROM Users
    `);
    if(result){
        return result;
    }
    return null
}

async function test() {
    const db = await dbPromise;

    // Get userId if matches username and password
    const result = await db.all(SQL`
        SELECT name FROM sqlite_master WHERE type='table';
    `);
    if(result){
        console.log(result);
    }
    return null
}

// Creates new user in database
async function addUser(user) {
    const db = await dbPromise;
    const insertUser = await db.prepare("INSERT INTO users (username, password, fName, lName, dateOfBirth, description, avatar) VALUES (?, ?, ?, ?, ?, ?, ?)");
    let result = await insertUser.run(user.username, user.password, user.fName, user.lName, user.dateOfBirth, user.description, user.avatar);

    // Check if successfully added user to database
    if(result){
        return true;
    }
    return false;
}

// Get user data
async function getUserData(user_id) {
    const db = await dbPromise;
    const result = await db.get(SQL`
        SELECT username, fName, lName, dateOfBirth, description, avatar
        FROM Users
        WHERE user_id = ${user_id}
    `);
    if(result === undefined){
        return null;
    }
    return await result;
}


// Export functions.
module.exports = {
    checkMatchingUser,
    getAllUsernames,
    test,
    addUser,
    getUserData
};
