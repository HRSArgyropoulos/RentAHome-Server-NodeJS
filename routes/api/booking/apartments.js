const router = require('express').Router();
const {
  getApartmentsInitialSearch,
} = require('../../../db/actions/apartment');

router.get('/', (req, res) => {
  setTimeout(async () => {
    const apartments = await getApartmentsInitialSearch(req.query);
    return res.status(200).json({ apartments });
  }, 4 * 1000); // fake server delay
});

module.exports = router;
