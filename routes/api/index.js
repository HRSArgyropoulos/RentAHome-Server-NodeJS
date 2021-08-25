const router = require('express').Router();

router.use('/booking', require('./booking'));
router.use('/host', require('./host'));

module.exports = router;
