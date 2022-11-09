const { Router } = require('express');
const registerController = require('../controller/register.controller');

const router = Router();

router.post('/', registerController.create)

module.exports = router;