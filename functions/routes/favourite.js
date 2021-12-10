const router = require("express").Router();
const favouriteController = require("../controllers/favourite");

const { body } = require('express-validator');

const validations = [
    body('propertyId').isInt(),
    body('propertyId').notEmpty()
]

router.put('/', validations, favouriteController.add);
router.delete('/', validations, favouriteController.remove);
router.get('/', favouriteController.getAll);

module.exports = router