const express = require('express');
const swimwearCtlr = require('../controllers/swimwearController');

const router = express.Router();

router.post('/', swimwearCtlr.createSwimwear);
router.get('/', swimwearCtlr.getAllSwimwear);
router.get('/:id', swimwearCtlr.getOneSwimwear);
router.patch('/:id', swimwearCtlr.modifySwimwear);
router.delete('/:id', swimwearCtlr.deleteSwimwear);

router.get('/barcode/:barcode', swimwearCtlr.getSwimwearByBarcode);
 // test
module.exports = router;