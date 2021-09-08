const mongoose = require('mongoose');
const { HostSchema } = require('./apartment');

HostSchema.index({ hostId: 1 });

// expost host model
const HostsSchema = mongoose.model('hosts', HostSchema);

module.exports = { HostsSchema };
