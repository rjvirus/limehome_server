const router = require("express").Router();
const favouriteController = require("../controllers/favourite");

router.put('/', favouriteController.add);
router.delete('/', favouriteController.remove);
router.get('/', favouriteController.getAll);

module.exports = router