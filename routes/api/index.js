const router = require("express").Router();
const bookRoutes = require("./login");

// Book routes
router.use("/login", bookRoutes);

module.exports = router;
