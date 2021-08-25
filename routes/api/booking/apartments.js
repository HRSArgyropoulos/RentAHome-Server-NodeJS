const router = require('express').Router();

router.get('/:id', (req, res, next) => {
  res.status(200).send(`${req.params.id}`);
});

module.exports = router;
