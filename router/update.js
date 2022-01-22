const router = require("express").Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  const filtereduser = { _id: req.body._id };

  const update = {
    name: req.body.name,
    age: req.body.age,
    city: req.body.city,
    country: req.body.country,
  };

  let doc = await User.findOneAndUpdate(filtereduser, update);

  res.status(200).send(update);
});

module.exports = router;
