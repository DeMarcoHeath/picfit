const router = require("express").Router();
const booksController = require("../../controllers/loginController");

// Matches with "/api/login"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/login/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
