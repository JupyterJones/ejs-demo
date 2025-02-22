// load the things we need
var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  var bootstraps = [
    {
      name: "CSS",
      organization: "Using Local Copy or CDN",
      topics: "SRC using 'public' directory",
    },
    {
      name: "JavaScript",
      organization: "Powerful JavaScript plugins",
      topics: "local install with npm or link to CDN.",
    },
    {
      name: "YouTube",
      organization: "Responsive Video Size",
      topics: "CSS and Video-container",
    },
  ];
  var tagline =
    "If You Can Imagine You Can Build it using BootStrap CSS, JavaScript.";

  res.render("pages/index", {
    bootstraps: bootstraps,
    tagline: tagline,
  });
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

// bootstrap page
app.get("/bootstrap", function (req, res) {
  res.render("pages/bootstrap");
});

//Experiments
app.get("/experiments", function (req, res) {
  res.render("pages/experiments");
});

//Youtube Video
//Experiments
app.get("/youtubevideo", function (req, res) {
  res.render("pages/youtubevideo");
});
app.get("/angelarium", function (req, res) {
  res.render("pages/angelarium");
});
app.get("/bootstrapexample", function (req, res) {
  res.render("pages/bootstrapexample");
});

app.use(express.static("public"));
app.listen(8080);
console.log("Your being served at localhost:8080");
