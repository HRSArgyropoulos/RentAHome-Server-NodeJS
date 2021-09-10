const { HostsSchema } = require('../models/host');
const crypto = require('crypto');

// check if user if exists
const findHost = async (id) => {
  return HostsSchema.findOne({ id });
};

// create new host
const createHost = async (name) => {
  // create random id for host
  const hostId = crypto.randomBytes(8).toString('hex');
  // create new doc instance
  const host = new HostsSchema({
    id: hostId,
    name,
  });
  // save host and return doc
  return await host.save();
};

module.exports = { findHost, createHost };
