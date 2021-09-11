const mongoose = require('mongoose');

// Host Schema
const HostSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  highRatedHost: { type: Boolean, required: true, default: false },
});

// Apartment Schema
const ApartmentSchema = new mongoose.Schema({
  apartmentId: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  capacity: { type: Number, required: true },
  baths: { type: Number, required: true },
  spacing: { type: String, required: true },
  beds: { type: Number, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  host: HostSchema,
  availableDates: [{ type: String }],
});
ApartmentSchema.index({ apartmentId: 1 }, { location: 1 });

// Export models
// Apartments model
const ApartmentsSchema = mongoose.model(
  'apartments',
  ApartmentSchema
);

module.exports = { ApartmentsSchema, HostSchema };
