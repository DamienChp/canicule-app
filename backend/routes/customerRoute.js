const express = require('express');
const customerCtlr = require('../controllers/customerController');

const router = express.Router();

router.post('/', customerCtlr.createCustomer);
router.get('/', customerCtlr.getAllCustomer);
router.get('/:id', customerCtlr.getOneCustomer);
router.put('/:id', customerCtlr.modifyCustomer);
router.delete('/:id', customerCtlr.deleteCustomer);

module.exports = router;