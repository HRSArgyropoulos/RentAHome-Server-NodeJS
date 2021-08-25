const router = require('express').Router();

router.use('/apartments', require('./apartments'));

module.exports = router;
