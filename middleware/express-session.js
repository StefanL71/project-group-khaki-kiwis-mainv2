const session = require('express-session');
const FileStore = require('session-file-store')(session);
const fileStoreOptions = {};

const sessionMaxAge = 3600000; // 1hr
 
const sessionCookie = session({
    name: 'sessionIdCookie',
    secret: 'thisshouldbeasecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: sessionMaxAge,
      secure: true, // cookie is only accessible over HTTP, requires HTTPS
    }
});

module.exports = sessionCookie;