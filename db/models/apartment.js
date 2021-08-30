const mongoose = require('mongoose');

// Host Schema
const HostSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  highRatedHost: { type: Boolean, required: true },
});

const LocationSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
});
LocationSchema.index({ title: 1 });

// Apartment Schema
const ApartmentSchema = new mongoose.Schema({
  apartmentId: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
  capacity: { type: Number, required: true },
  baths: { type: Number, required: true },
  spacing: { type: String, required: true },
  beds: { type: Number, required: true },
  price: { type: Number, required: true },
  location: LocationSchema,
  host: HostSchema,
  availableDates: [{ type: String }],
});
ApartmentSchema.index({ apartmentId: 1 });

// Export models
// Apartments model
const ApartmentsSchema = mongoose.model(
  'apartments',
  ApartmentSchema
);

module.exports = { ApartmentsSchema };
