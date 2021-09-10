const router = require('express').Router();
const { findHost, createHost } = require('../../../db/actions/host');

router.post('/addHost', async (req, res) => {
  const { hostName } = req.body;
  // create new host
  const newHost = await createHost(hostName);
  return res.status(200).json({ host: newHost });
});

router.get('/getHost', async (req, res) => {
  const { hostId } = req.query;
  const host = await findHost(hostId);
  return res.status(200).json({ host });
});

module.exports = router;
