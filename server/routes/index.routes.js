//Here are the list of all routes

const express = require('express');
// const userRoute = require("./user.routes");
const mediaRoute = require("./media.routes");
// const personRoute = require("./person.routes");
// const reviewRoute = require("./review.routes");

const router = express.Router();

// router.use("/user", userRoute);
// router.use("/person", personRoute);
// router.use("/reviews", reviewRoute);
router.use("/:mediaType", mediaRoute);

module.exports = router;