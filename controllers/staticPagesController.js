const router = require("express").Router();
const handlebars = require("handlebars");

handlebars.registerHelper("times", function (n, options) {
  let result = "";

  for (let i = 0; i < n; i++) {
    result += options.fn(this);
  }

  return result;
});

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/beesMatter", (req, res) => {
  res.render("bees/beesMatter");
});

router.get("/ourHoney", (req, res) => {
  res.render("bees/ourHoney");
});

router.get("/ourHoney/details", (req, res) => {
  res.render("bees/honeyDetails");
});

router.get("/adoptBeehive", (req, res) => {
  res.render("bees/adoptBeehive");
});

router.get("/aboutUs", (req, res) => {
  res.render("bees/aboutUs");
});

router.get("/contact", (req, res) => {
  res.render("bees/contact");
});

router.post("/contact", (req, res) => {
  res.redirect("/contact/thankYou");
});

router.get("/contact/thankYou", (req, res) => {
  res.render("bees/thankYou");
});

module.exports = router;
