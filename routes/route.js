
const express = require('express');
const router = express.Router();
const controllerdata = require("../Controllers/controller-contact");

router.route('/').post(controllerdata.data);


module.exports = router;