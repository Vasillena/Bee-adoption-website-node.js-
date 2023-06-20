const router = require("express").Router();

const { isAuth } = require("../middlewares/authMiddleware");
const beehiveService = require("../services/beehiveService");
const { getErrorMessage } = require("../utils/errorUtils");

router.get("/myBeehive", async (req, res) => {
  const beehive = await beehiveService.getAll();

  res.render("bees/myBeehive", { beehive });
});

router.get("/adoptBeehive/adoption", isAuth, (req, res) => {
  res.render("bees/adoptionForm");
});

router.post("/adoptBeehive/adoption", isAuth, async (req, res) => {
  const beehiveData = req.body;

  try {
    await beehiveService.create(req.user._id, beehiveData);
  } catch (error) {
    return res
      .status(400)
      .render("bees/adoptionForm", { error: getErrorMessage(error) });
  }

  res.redirect("/myBeehive");
});

router.get("/myBeehive/:beehiveId/manage", async (req, res) => {
  const beehive = await beehiveService.getOne(req.params.beehiveId);

  res.render("bees/manageBeehive", { beehive });
});

router.get("/myBeehive/:beehiveId/edit", isAuth, async (req, res) => {
  const beehive = await beehiveService.getOne(req.params.beehiveId);

  res.render("bees/edit", { beehive });
});

router.post("/myBeehive/:beehiveId/edit", isAuth, async (req, res) => {
  const beehiveData = req.body;
  await beehiveService.edit(req.params.beehiveId, beehiveData);

  res.redirect(`/myBeehive/${req.params.beehiveId}/manage`);
});

router.get("/myBeehive/:beehiveId/delete", isAuth, async (req, res) => {
  await beehiveService.delete(req.params.beehiveId);

  res.redirect("/myBeehive");
});

module.exports = router;
