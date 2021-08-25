const router = require('express').Router();
const { saveApartment } = require('../../../db/actions/apartment');

const createApartment = async (req, res, next) => {
  await saveApartment(req.body).then(() => {
    return res.status(200).json({ success: true });
  });
};

router.post('/addApartment', createApartment);

module.exports = router;
