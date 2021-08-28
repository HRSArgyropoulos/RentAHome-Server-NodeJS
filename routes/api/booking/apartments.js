const router = require('express').Router();
const {
  getApartmentsInitialSearch,
} = require('../../../db/actions/apartment');

router.get('/', async (req, res, next) => {
  const { location, checkIn, checkOut } = req.query;

  const apartments = await getApartmentsInitialSearch(location);
  return res.status(200).json({ apartments });
});

module.exports = router;
