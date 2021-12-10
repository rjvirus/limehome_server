const router = require("express").Router();
const { addFavourite, deleteFavourite, getAllFavourite } = require("../controllers/favourite");

router.put('/', addFavourite);
router.delete('/', deleteFavourite);
router.get('/', getAllFavourite);

module.exports = router