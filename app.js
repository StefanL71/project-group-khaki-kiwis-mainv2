// Setup Express
const express = require("express");
const app = express();
const port = 3000;
const session = require("./middleware/express-session.js");

// Setup Handlebars
const hbs = require("hbs");
hbs.registerPartials(__dirname + '/views/partials');

const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars.engine({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Setup body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setup cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Setup Sessions (server side "cookies")
app.use(session);

// Make the "public" folder available statically
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Use the toaster middleware
app.use(require("./middleware/toaster-middleware.js"));

// Setup routes
app.use(require("./routes/application-routes.js"));

// Start the server running.
app.listen(port, function () {
    console.log(`The Best App In The World ™️ listening on port ${port}!`);
});
