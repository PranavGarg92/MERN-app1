const router = require("express").Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  const filtereduser = { _id: req.body._id };

  let doc = await User.deleteOne(filtereduser);

  res.status(200).send(req.body);
});

module.exports = router;
