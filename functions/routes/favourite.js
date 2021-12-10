const router = require("express").Router();
const favouriteController = require("../controllers/favourite");

const { body } = require('express-validator');

router.put('/', body('propertyId').not().isString(), favouriteController.add);
router.delete('/', favouriteController.remove);
router.get('/', favouriteController.getAll);

module.exports = router