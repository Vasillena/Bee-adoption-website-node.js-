const router = require("express").Router();

const staticPagesController = require("./controllers/staticPagesController");
const authController = require("./controllers/authController");
const beehiveController = require("./controllers/beehiveController");

router.use(staticPagesController);
router.use(authController);
router.use(beehiveController);

router.all("*", (req, res) => {
  res.render("home/404");
});

module.exports = router;
