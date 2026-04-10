const path = require("path");
const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
// const ExpressError = require("./ExpressError"); // optional unless you’ll use it
// const cookieParser = require("cookie-parser"); // not required for sessions

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// If you’ll parse POST bodies later:
// app.use(express.urlencoded({ extended: true }));

// 1) Sessions FIRST
app.use(
  session({
    secret: "thisisasecret", // put a long secret in env in real apps
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true } // enable only behind HTTPS + trust proxy
  })
);

// 2) Then flash
app.use(flash());

// // 3) Make flash messages available to all templates
// app.use((req, res, next) => {
//   res.locals.info = req.flash("info");
//   res.locals.error = req.flash("error");
//   res.locals.success = req.flash("success");
//   next();
// });

// --- Routes ---

// Test route
app.get("/test", (req, res) => {
  // req.session.username = "Sanket";
  console.log(req.session); // valid
  res.send("Session Set");
});

// Count route
app.get("/reqcount", (req, res) => {
  req.session.count = (req.session.count || 0) + 1;
  res.send(`You have visited this site ${req.session.count} times`);
});

// Register / Welcome routes
app.get("/register", (req, res) => {
  let { name ="samarth" } = req.query;       // e.g., /register?name=Samarth
  req.session.name = name;
  req.flash("success", "Successfully Registered");
  // Pass the value you want to the template
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page.ejs", { name: req.session.name, msg: req.flash("success") });
});
app.get("/welcome", (req, res) => {
  const name = req.session.name;
  if (name) res.send(`Welcome back, ${name}`);
  else res.send("Who are you?");
});

// Optional: central error handler
// app.use((err, req, res, next) => {
//   const { status = 500, message = "Something went wrong" } = err;
//   res.status(status).send(message);
// });

app.listen(8080, () => {
  console.log("Server is Listening Guys !!!!");
});
