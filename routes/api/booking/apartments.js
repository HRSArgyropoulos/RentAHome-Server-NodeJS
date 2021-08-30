const router = require('express').Router();
const {
  getApartmentsInitialSearch,
} = require('../../../db/actions/apartment');

router.get('/', async (req, res, next) => {
  const apartments = await getApartmentsInitialSearch(req.query);
  return res.status(200).json({ apartments });
});

module.exports = router;
