const router = require('express').Router();

// endpoint for hosts to manipulate/add apartments
router.use('/apartment', require('./apartment'));
router.use('/hosts', require('./hosts'));

module.exports = router;
